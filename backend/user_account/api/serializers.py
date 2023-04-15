from django.contrib.auth import get_user_model
from rest_framework import serializers
from sena_research.api.serializers import ServiceSerializer

Promoter = get_user_model()

class PromoterSerializer(serializers.ModelSerializer):
    def __init__(self, instance=None, data=None, **kwargs):
        # set partial parameter to True
        # This tells the serializer to perform partial updates, meaning that any fields that are not included in the data will not be updated
        kwargs['partial'] = True
        super().__init__(instance, data, **kwargs)
    
    class Meta:
        model = Promoter
        # fields = ('first_name', 'last_name', 'email' , 'bio', 'image')
        fields = '__all__'