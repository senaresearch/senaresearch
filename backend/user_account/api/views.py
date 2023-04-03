from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model


Promoter = get_user_model()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_user_profile(request):
    data = request.data
    promoter = get_object_or_404(Promoter, id=request.user.id)
    new_promoter_data = PromoterSerializer(instance=promoter, data=data)
    print(new_promoter_data)
    
    if new_promoter_data.is_valid():
        new_promoter_data.save() # .save() will update the existing `Promoter` instance.
        print(new_promoter_data.is_valid())
        return Response(new_promoter_data.data)
	
 
	
    
	
		
		
