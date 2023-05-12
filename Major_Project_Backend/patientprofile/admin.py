from django.contrib import admin
from patientprofile.models import PatientInformation

# Register your models here.
class PatientInformationAdmin(admin.ModelAdmin):
    list_display = ['patient_name','gender','father_name','mother_name']

admin.site.register(PatientInformation,PatientInformationAdmin)