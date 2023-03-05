from django.db import models
from django.conf import settings

#TODO: TRANSLATE EVERYTHING IN ARABIC TO MAKE IT EASY TO ACCESS SUING ADMIN PANEL

class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    
    def __str__(self):
        return f'the service -{self.name}- on the category -{self.category}-'
class Category(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    image = models.ImageField(upload_to='',)
    services = models.ForeignKey(Service, related_name='services', on_delete=models.CASCADE)
    
    def totale_services(self):
        return self.services.count()
    def __str__(self):
        return f'the Category -{self.name}- on the Service -{self.service}-'
    
    
class Student(models.Model):
    fullname    = models.CharField(max_length=255)
    description = models.TextField(null=True)
    # documents   = models.FileField() #TODO: IS IT WORKING IF THE USER SELECT MULTIPLE FILES !!!
    email    = models.EmailField(max_length=255, null=True)
    phone    = models.IntegerField(null=True) #TODO: SEARCH FOR ALGERIAN PHONE NUMBER APIs e.g: https://django-phonenumber-field.readthedocs.io/en/latest/index.html
    topic    = models.CharField(max_length=255, null=True)
    promoter = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    service  = models.OneToOneField(Service, on_delete=models.CASCADE, related_name='service') #FIXME: SHOULD BE ONE TO MANY RELATIONSHIP WITH SERVICE MODEL
    # dateTime = models.DateTimeField()
    
    # services = models.ManyToManyField(Service, blank=True)
    
    def __str__(self):
        return self.fullname
    
