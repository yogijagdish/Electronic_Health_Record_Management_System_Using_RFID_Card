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

# class PatientReport(models.Model):
#     user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
#     test_name = models.CharField(max_length=255)
#     refered_at = models.DateTimeField(auto_now_add=True)
#     tested_at = models.DateTimeField(null=True)
    # report = models.FileField(upload_to='files/')


# class PatientStatus(models.Model):
#     user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
#     is_available = models.BooleanField()

class PatientStatus(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    is_available = models.BooleanField(default=False)
    is_treated = models.BooleanField(default=False)
    problem = models.CharField(max_length=400)
    doctor = models.IntegerField()

class PatientReport(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    test = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now=True)
    report = models.FileField(upload_to="report/")

