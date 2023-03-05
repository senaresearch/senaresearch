


from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
app_name = 'user_account'

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

]
