from django.db import models
from django.contrib.auth.models import AbstractUser

#TODO: TRANSLATE EVERYTHING IN ARABIC TO MAKE IT EASY TO ACCESS USING ADMIN PANEL

class Promoter(AbstractUser):
    DEGREE = [
        ('Master', 'Master'),
        ('Doctort', 'Doctort'),
    ]
    RANK = [
        ('Professor', 'Professor'),
        ('Lecturer professor A', 'Lecturer professor A'),
        ('Lecturer professor B', 'Lecturer professor B'),
        ('Assistant Professor A', 'Assistant Professor B'),
        ('PhD student', 'PhD student')
    ]
    STATUS = [
        ('Active', 'Active'),
        ('NonActive', 'NonActive'),
    ]
    
    rank = models.CharField(choices=RANK, max_length=50, blank=True)
    academic_division = models.CharField(max_length=100, blank=True)
    major = models.CharField(max_length=100, blank=True)
    degree = models.CharField(choices=DEGREE, max_length=20, blank=True)
    bio = models.TextField(blank=True)
    # TODO: change the default image
    image = models.ImageField(upload_to='Users/', default='services/33_003_4DLxqvJ.jpg')
    phone = models.CharField(max_length=10)
    class Meta:
        verbose_name = 'Promoter'
    
    # Required fields to create a new user(promoter)
    def __str__(self):
        return self.username
    
class Email(models.Model):
    subject = models.CharField(max_length=200)
    message = models.TextField()
    # from_email: A string. If None, Django will use the value of the DEFAULT_FROM_EMAIL setting.
    # recipient_list : determined in the signal
    html_message = models.TextField(blank=True)
    
    def __str__(self):
        return self.subject

from django.conf import settings
from django.db.models.signals import post_save, pre_save

from django.core.mail import send_mail, mail_admins

def post_save_receiver(sender, instance, created, **kwargs):
    if created and not instance.is_superuser:
        # if instance.is_active:
        #     send_mail(
        #     'New Book Added',
        #     f'A new book "{"instance.title"}" by {"instance.author"} has been added.',
        #     'admin@example.com',
        #     ['admin@example.com'],
        #     fail_silently=False,
        # )
        mail_admins(
            subject='A New Promoter Created',
            message=f'A new user created by {instance.username}, check it',
        )
        instance.is_active = False
        instance.save()


def pre_save_user(sender, instance, **kwargs):
    if instance.pk:  # Check if the instance is already saved (not a new record)
        try:
            original_instance = sender.objects.get(pk=instance.pk)  # the user object before applying the changes(updates) 
            if instance.is_active != original_instance.is_active:
                if instance.is_active:
                    send_mail(
                        'Account Activation',
                        'Your account has been activated.',
                        'sena.research@gmail.com',
                        [instance.email],
                        fail_silently=False,
                    )
        except sender.DoesNotExist:
            pass
        
    

post_save.connect(post_save_receiver, sender=settings.AUTH_USER_MODEL)
pre_save.connect(pre_save_user, sender=settings.AUTH_USER_MODEL)