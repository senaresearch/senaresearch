from django.contrib.auth import get_user_model
from rest_framework import serializers
from sena_research.api.serializers import ServiceSerializer
from djoser.serializers import UserCreateSerializer

Promoter = get_user_model()
from djoser.serializers import UserSerializer

class PromoterSerializer():
    def __init__(self, instance=None, data=None, **kwargs):
        # set partial parameter to True
        # This tells the serializer to perform partial updates, meaning that any fields that are not included in the data will not be updated
        kwargs['partial'] = True
        super().__init__(instance, data, **kwargs)
    
    class Meta:
        model = Promoter
        fields = ('first_name', 'last_name', 'email' , 'bio', 'image')
class CurrentPromoterSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = Promoter
        fields = ('first_name', 'last_name', 'email' , 'bio', 'image', 'major', 'id', 'phone')
        


from djoser.serializers import UserCreatePasswordRetypeSerializer, UserCreateSerializer

class CustomPromoterCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = Promoter
        fields = ('email', 'username', 'password', 'first_name', 'last_name', 'image', 'phone')
        
class CustomUserCreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        # model = Promoter
        fields = ('email', 'username', 'first_name', 'last_name','password', 'image', 'phone')
        
    