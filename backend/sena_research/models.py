from django.db import models
from django.conf import settings

#TODO: TRANSLATE EVERYTHING IN ARABIC TO MAKE IT EASY TO ACCESS SUING ADMIN PANEL

class Category(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    image = models.ImageField(upload_to='Categories')
    # TODO: add total number of services on each category instance
    # def totale_services(self):
    #     return self.services.count()
    def __str__(self):
        return f'{self.name} Category'
    class Meta:
        verbose_name_plural = 'Categories'
    
class Service(models.Model):
    STATUS = [
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
        ('Proccessing', 'Proccessing'),
    ]
    
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='services')
    status = models.CharField(max_length=25, choices=STATUS, default=STATUS[2][0])
    promoter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='promoter')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')
    class Meta:
        verbose_name_plural = 'Services'
    def __str__(self):
        return f'the service -{self.name}- on the category -{self.category}- by name -{self.promoter}'
    
class Student(models.Model):
    fullname    = models.CharField(max_length=255)
    description = models.TextField(null=True)
    # documents   = models.FileField() #TODO: IS IT WORKING IF THE USER SELECT MULTIPLE FILES !!!
    email    = models.EmailField(max_length=255, null=True)
    phone    = models.IntegerField(null=True) #TODO: SEARCH FOR ALGERIAN PHONE NUMBER APIs e.g: https://django-phonenumber-field.readthedocs.io/en/latest/index.html
    topic    = models.CharField(max_length=255, null=True)
    # promoter = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # service  = models.OneToOneField(Service, on_delete=models.CASCADE, related_name='service') #FIXME: SHOULD BE ONE TO MANY RELATIONSHIP WITH SERVICE MODEL
    # dateTime = models.DateTimeField()
    
    # services = models.ManyToManyField(Service, blank=True)
    
    def __str__(self):
        return self.fullname
    
    
class ContactUs(models.Model):
    fullname = models.CharField(max_length=255)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()
    sent_on = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Contact Us'
    
    
    def __str__(self):
        return f'Emaild by {self.fullname}'
    
