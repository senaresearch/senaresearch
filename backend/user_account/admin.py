from django.contrib import admin
from .models import Promoter
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import Promoter

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = Promoter
    list_display = ["email", "username",]

admin.site.register(Promoter, CustomUserAdmin)

