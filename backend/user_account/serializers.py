from django.contrib.auth import get_user_model
from rest_framework import serializers

USER = get_user_model()

class PromoterSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = ['first_name', 'username', 'is_active', 'id' ]