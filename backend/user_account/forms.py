from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Promoter

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Promoter
        fields = ("username", "email")

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = Promoter
        fields = ("username", "email")