from django.db import models
from authentication.models import User

# Create your models here.

class DoctorProfile(models.Model):
    image = models.ImageField(upload_to='image/')
