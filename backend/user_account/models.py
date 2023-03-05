from django.db import models
from django.contrib.auth.models import AbstractUser
from sena_research.models import Service

#TODO: TRANSLATE EVERYTHING IN ARABIC TO MAKE IT EASY TO ACCESS SUING ADMIN PANEL

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
    
    # rank = models.CharField(choices=RANK, max_length=50)
    # academic_division = models.CharField(max_length=100)
    # major = models.CharField(max_length=100)
    # degree = models.CharField(choices=DEGREE, max_length=20)
    # status = models.CharField(max_length=20, choices=STATUS) # COULD BE BOOLEAN FIELD AS WELL
    # service = models.ManyToManyField(Service)
    
    
    def ge_fullname(self):
        return f'{self.first_name} {self.last_name}'
    
    def __str__(self):
        return self.ge_fullname()
    
    
# Multiple Languages

# Dashboard

# Design