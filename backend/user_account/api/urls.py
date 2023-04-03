from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'user_account'

urlpatterns = [
    path('profile-edit', views.edit_user_profile),

]
