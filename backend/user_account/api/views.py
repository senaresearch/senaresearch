from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model
from rest_framework import status
from sena_research.models import Service, Category


Promoter = get_user_model()

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def edit_user_profile(request):
#     promoter = get_object_or_404(Promoter, id=request.user.id)
#     new_promoter_data = PromoterSerializer(instance=promoter, data=request.data)
#     print(new_promoter_data)
    
#     new_promoter_data.save() # .save() will update the existing `Promoter` instance.
#     if new_promoter_data.is_valid():
#         print(new_promoter_data.is_valid())
#     return Response(new_promoter_data.data)



@api_view(['GET'])
@permission_classes([AllowAny])
def get_promoter_data(request, promoterID):
    promoter = get_object_or_404(Promoter, id=promoterID)
    services = Service.objects.filter(promoter=promoter.id, status='Approved')
    promoter_serializer = PromoterSerializer(instance=promoter, data=request.data)
    services_serializer = ServiceSerializer(instance=services, data=[], many=True)
    # call is_valid to validate the data (even though it's not technically "data")
    if promoter_serializer.is_valid() and services_serializer.is_valid():
        # access the serialized data through the .data attribute
        return Response({'promoterData':promoter_serializer.data, 'promoterServices':services_serializer.data})

    return Response({'promoter_serializer_errors':promoter_serializer.errors, 'services_serializer_error':services_serializer.errors})

 
@api_view(['GET'])
@permission_classes([AllowAny])
def get_promoters_data(request):
    promoters = Promoter.objects.all()
    promoters_serializer = PromoterSerializer(promoters, many=True)
    return Response(promoters_serializer.data)






 
	
    
	
		
		
