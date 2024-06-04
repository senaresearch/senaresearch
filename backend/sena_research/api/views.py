import json
from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from .serializers import CategorySerializer, ServiceSerializer, ContactSerializer, ServiceUpdateSerializer, OrderSerializer
from django.contrib.auth import get_user_model
from rest_framework import status
from django.core.mail import send_mail, mail_admins
from user_account.api.serializers import PromoterSerializer, CurrentPromoterSerializer


Promoter = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def services_list(request):
    services = Service.objects.filter(promoter=request.user)
    serializer = ServiceSerializer(instance=services, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def service_update(request, serviceID):
    print(request.data)
    service = get_object_or_404(Service, id=serviceID, promoter=request.user)
    serializer = ServiceUpdateSerializer(service, data=request.data)
    if serializer.is_valid():
        serializer.save()
        services = Service.objects.filter(promoter=request.user)
        servicesSerializer = ServiceSerializer(instance=services, many=True)
        return Response(servicesSerializer.data)
    print('________________________________________________________________')
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def service_delete(request, serviceID):
    service = get_object_or_404(Service, id=serviceID, promoter=request.user)
    service.delete()
    services = Service.objects.filter(promoter=request.user)
    serializer = ServiceSerializer(instance=services, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def service_create(request):
    # print(request.data)
    try:
        newService = Service.objects.create(
                    name=request.data.get('name'),
                    description=request.data.get('description'),
                    price=request.data.get('price'),
                    image=request.data.get('image'),
                    category=Category.objects.get(id=request.data.get('category')),
                    promoter=request.user,
                    )
        services = Service.objects.filter(promoter=request.user)
        servicesSerializer = ServiceSerializer(instance=services, many=True)
        return Response(servicesSerializer.data)
    except(Exception):
        return Response()
    
@api_view(['GET'])
@permission_classes([AllowAny])
def get_categories(request):
    categories = Category.objects.all()
    categories_serializer = CategorySerializer(categories, many=True)
    print(categories_serializer.data)
    print('categories_serializer.data')
    return Response(categories_serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_promoter_majors(request):
    majors = Promoter.objects.values_list('major', flat=True).distinct() 
    return Response(majors)

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_us(request):
    message_serializer = ContactSerializer(data=request.data)
    if message_serializer.is_valid():
        message_serializer.save()
        print(message_serializer.data)
        # SENDING NOTIFICATION EMAIL TO ADMINS
        mail_admins(
        		subject='New Contact Form on Sena Research Platform',
        		message=request.data.get('message'),
        		# from_email=settings.EMAIL_HOST_USER,
        		# recipient_list=settings.EMAIL_ADMINS_RECEIPT_LIST
          )
        return Response('Your email has been sent succesfully.')
    return Response(message_serializer.errors)

@api_view(['GET'])
@permission_classes([AllowAny])
def promoters_search(request):
    categoryID = int(request.query_params.get('categoryID')) if request.query_params.get('categoryID') else None
    major = request.query_params.get('promoterMajor')
    services = Service.objects.filter(category_id=categoryID)
    promoters_list = [] # a List of django querysets
    
    # THERE ARE THREE WAYS OF SEARCH
    # --> Search based on both of them(major and category)
    if categoryID and major:
        for promoterID in services.values_list('promoter', flat=True).distinct():
            try:
                promoter_queryset = Promoter.objects.get(id=promoterID, major=major)
                promoters_list.append(promoter_queryset)
            except:
                continue
        promoters_serializer = CurrentPromoterSerializer(promoters_list, many=True)  
    # --> Search based on only category
    elif categoryID and not major:
        # values_list(): to retrieve the values of the parent field from the filtered children. 
        # flat=True: to ensure that the values are returned as a flat list.
        # For example, a list [[1,2,3],[4,5,6]] is flattened into [1,2,3,4,5,6]
        # distinct(): is used to remove duplicate values if necessary.
        for promoterID in services.values_list('promoter', flat=True).distinct():
            promoter_queryset = get_object_or_404(Promoter, pk=promoterID)
            promoters_list.append(promoter_queryset)
        promoters_serializer = CurrentPromoterSerializer(promoters_list, many=True)
            
    # --> Search based on only Promoter Major
    elif not categoryID and major:
        promoters_queryset = Promoter.objects.filter(major=major)
        promoters_serializer = CurrentPromoterSerializer(promoters_queryset, many=True)
        
    # --> Search without both of them(major and category)
    else:
        promoters = Promoter.objects.all()
        promoters_serializer = CurrentPromoterSerializer(promoters, many=True)
        
    # Returning the results   
    return Response(promoters_serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def place_order(request):
    """
    1. deserialize order data and save it
    2. 
    """
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data['promoter'])
        fullname = serializer.data['fullname']
        promoter = get_object_or_404(Promoter, pk=serializer.data['promoter'])
        service = get_object_or_404(Service, pk=serializer.data['service']).name
        
        email_message = f'{fullname} placed a new order for {promoter.get_full_name()}(promoter) and {service} (service)'
        # SENDING NOTIFICATION EMAIL TO ADMINS
        mail_admins(
        		subject='A New order has been Placed',
        		message=email_message,
          )
        return Response('Your email has been sent succesfully.')
    return Response(serializer.errors)