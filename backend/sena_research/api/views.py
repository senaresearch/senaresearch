from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from .serializers import CategorySerializer, ServiceSerializer, ContactSerializer
from django.contrib.auth import get_user_model
from rest_framework import status
from django.core.mail import send_mail, mail_admins


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
    service = get_object_or_404(Service, id=serviceID, promoter=request.user)
    serializer = ServiceSerializer(service, data=request.data)
    if serializer.is_valid():
        serializer.save()
        services = Service.objects.filter(promoter=request.user)
        servicesSerializer = ServiceSerializer(instance=services, many=True)
        return Response(servicesSerializer.data)
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def service_delete(request, serviceID):
    service = get_object_or_404(Service, id=serviceID, promoter=request.user)
    service.delete()
    services = Service.objects.filter(promoter=request.user)
    serializer = ServiceSerializer(instance=services, many=True)
    print(len(serializer.data))
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def service_create(request):
    print('request.data')
    try:
        newService = Service.objects.create(
                    name=request.data.get('name'),
                    description=request.data.get('description'),
                    price=request.data.get('price'),
                    image=request.data.get('image'),
                    category=Category.objects.get(id=1) ,
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
    return Response(categories_serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_us(request):
    message_serializer = ContactSerializer(data=request.data)
    if message_serializer.is_valid():
        message_serializer.save()
        # SENDING NOTIFICATION EMAIL TO ADMINS
        mail_admins(
        		subject='New Contact Form on Sena Research Platform',
        		message=request.data.get('message'),
        		# from_email=settings.EMAIL_HOST_USER,
        		# recipient_list=settings.EMAIL_ADMINS_RECEIPT_LIST
          )
        return Response('Your email has been sent succesfully.')
    return Response(message_serializer.errors)
