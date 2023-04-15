from django.contrib.auth import get_user_model
from rest_framework import serializers
from ..models import Category, Service, ContactUs

Promoter = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
        
class ServiceSerializer(serializers.ModelSerializer):
    def __init__(self, instance=None, data=None, **kwargs):
        # set partial parameter to True
        # This tells the serializer to perform partial updates, meaning that any fields that are not included in the data will not be updated
        kwargs['partial'] = True
        super().__init__(instance, data, **kwargs)
    
    class Meta:
        model = Service
        fields = '__all__'
        depth = 1
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        # fields = '__all__'
        exclude = ['id']