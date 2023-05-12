from django.db import models

# Create your models here.
class DoctorProfile(models.Model):
    image = models.ImageField(upload_to='image/')