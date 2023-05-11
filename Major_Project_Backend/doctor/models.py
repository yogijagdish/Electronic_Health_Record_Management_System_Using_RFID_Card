from django.db import models
from authentication.models import User

# Create your models here.
class DoctorProfile(models.Model):
    # personal
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    specialization = models.CharField(max_length=255)

    # contact

    phone_number = models.CharField(max_length=20)
    permanent_address = models.CharField(max_length=255)
    current_address = models.CharField(max_length=255)

    # education

    bachelor = models.CharField(max_length=255)
    master = models.CharField(max_length=255,null=True)
    phd = models.CharField(max_length=255,null=True)


    def __str__(self):
        return self.hospital

