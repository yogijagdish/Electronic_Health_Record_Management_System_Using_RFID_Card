from django.db import models
from authentication.models import User

# Create your models here.
class DoctorProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    specialization = models.CharField(max_length=255)
    hospital = models.ForeignKey('Hospital',on_delete=models.CASCADE)

    def __str__(self):
        return self.specialization


class Hospital(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ContactDetails(models.Model):
    doctor = models.OneToOneField(User,on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20)
    permanent_address = models.CharField(max_length=255)
    current_address = models.CharField(max_length=255)

    def __str__(self):
        return self.current_address
    

class Qualification(models.Model):
    doctor = models.OneToOneField(User,on_delete=models.CASCADE)
    bachelor = models.CharField(max_length=255)
    master = models.CharField(max_length=255,null=True)
    phd = models.CharField(max_length=255,null=True)

    def __str__(self):
        return self.bachelor
