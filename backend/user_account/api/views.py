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

@api_view(['GET'])
@permission_classes([AllowAny])
def get_promoter_data(request, promoterID):
    promoter = get_object_or_404(Promoter, id=promoterID)
    services = Service.objects.filter(promoter=promoter.id, status='Approved')
    promoter_serializer = CurrentPromoterSerializer(promoter)
    services_serializer = ServiceSerializer(instance=services, many=True)

    # access the serialized data through the .data attribute
    return Response({'promoterData':promoter_serializer.data, 'promoterServices':services_serializer.data})
 
@api_view(['GET'])
@permission_classes([AllowAny])
def get_promoters_data(request):
    promoters = Promoter.objects.filter(is_active=True)
    promoters_serializer = CurrentPromoterSerializer(promoters, many=True)
    return Response(promoters_serializer.data)






 
	
    
	
		
		
