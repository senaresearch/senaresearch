from django.db import models
from user_account.models import Promoter

#TODO: TRANSLATE EVERYTHING IN ARABIC TO MAKE IT EASY TO ACCESS SUING ADMIN PANEL

class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    def __str__(self):
        return self.name
    
class Student(models.Model):
    fullname    = models.CharField(max_length=255)
    description = models.TextField()
    documents   = models.FileField() #TODO: IS IT WORKING IF THE USER SELECT MULTIPLE FILES !!!
    email    = models.EmailField(max_length=255)
    phone    = models.IntegerField() #TODO: SEARCH FOR ALGERIAN PHONE NUMBER APIs
    topic    = models.CharField(max_length=255)
    promoter = models.OneToOneField(Promoter)
    service  = models.OneToOneField(Service) #FIXME: SHOULD BE ONE TO MANY RELATIONSHIP WITH SERVICE MODEL
    dateTime = models.DateTimeField()
    
    services = models.ManyToManyField(Service, blank=True)
    
    def __str__(self):
        return self.fullname
    
