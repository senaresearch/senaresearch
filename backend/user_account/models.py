from django.db import models
from django.contrib.auth.models import AbstractUser

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
    
    rank = models.CharField(choices=RANK, max_length=50)
    academic_division = models.CharField(max_length=100)
    major = models.CharField(max_length=100)
    degree = models.CharField(choices=DEGREE, max_length=20)
    status = models.CharField(max_length=20, choices=STATUS, default=STATUS[1][0]) # COULD BE BOOLEAN FIELD AS WELL
    bio = models.TextField()
    # TODO: change the default image
    image = models.ImageField(upload_to='Users/', default='media/services/33_003_4DLxqvJ.jpg')
    class Meta:
        verbose_name = 'Promoter'
    def __str__(self):
        return self.username