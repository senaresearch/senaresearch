from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'user_account'

urlpatterns = [
    path('promoters/<int:promoterID>', views.get_promoter_data),
    path('promoters', views.get_promoters_data),
]
