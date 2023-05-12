from django.db import models
from authentication.models import User

# Create your models here.
class PatientInformation(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    id_number = models.CharField(max_length=200)
    patient_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=2)
    permanent_address = models.CharField(max_length=255)
    chitizenship_num = models.CharField(max_length=20)
    father_name = models.CharField(max_length=255)
    mother_name = models.CharField(max_length=255)