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
    description = models.TextField(max_length=150)
    price = models.FloatField()
    image = models.ImageField(upload_to='services')
    status = models.CharField(max_length=25, choices=STATUS, default=STATUS[2][0])
    promoter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='promoter')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')
    class Meta:
        verbose_name_plural = 'Services'
    def __str__(self):
        return f'the service -{self.name}- on the category -{self.category}- by name -{self.promoter}'
    
class Order(models.Model):
    """
    1. click on order this srvice btn
    2. form modal popup with student/service/promoter info, submit the form
    3. the admin recieves a notification email about the order
    4. the admin contact the service provider about their avaiability to do the service(manually)
    5. the admin sends a notification email to the student to pay the service fee
    """
    fullname = models.CharField(max_length=255)
    email    = models.EmailField(max_length=255, null=True)
    phone    = models.IntegerField(null=True)
    promoter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    service  = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='orders') #FIXME: SHOULD BE ONE TO MANY RELATIONSHIP WITH SERVICE MODEL
    created_on = models.DateTimeField(auto_now_add=True)
        
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
        return f'Email by {self.fullname} '
    



from django.conf import settings
from django.db.models.signals import post_save, pre_save

from django.core.mail import send_mail, mail_admins

def post_save_service(sender, instance, created, **kwargs):
    if created:
        mail_admins(
            subject='New Service Created',
            message=f'{instance.promoter.username} created a new service',
        )
        instance.save()


def pre_save_service(sender, instance, **kwargs):
    if instance.pk:  # Check if the instance is already saved (not a new record)
        try:
            original_instance = sender.objects.get(pk=instance.pk)  # the user object before applying the changes(updates) 
            if instance.status != original_instance.status:
                if instance.status == 'Approved':
                    send_mail(
                        subject='Congratulations - Your service has been successfully Approved',
                        message='Your account has been activated.',
                        from_email='sena.research@gmail.com',
                        recipient_list=[instance.promoter.email],
                        fail_silently=False,
                    )
                if instance.status == 'Rejected':
                    send_mail(
                        'Unfortunately - Your service has been rejected',
                        'Your account has been activated.',
                        'sena.research@gmail.com',
                        [instance.promoter.email],
                        fail_silently=False,
                    )
        except sender.DoesNotExist:
            pass
        
    

post_save.connect(post_save_service, sender=Service)
pre_save.connect(pre_save_service, sender=Service)