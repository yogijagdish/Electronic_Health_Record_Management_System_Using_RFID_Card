from django.contrib import admin
from patientprofile.models import PatientInformation,PatientStatus

# Register your models here.
class PatientInformationAdmin(admin.ModelAdmin):
    list_display = ['patient_name','gender','father_name','mother_name']

class PatientStatusAdmin(admin.ModelAdmin):
    list_display = ['user_id','is_available','is_treated','problem']

admin.site.register(PatientInformation,PatientInformationAdmin)
admin.site.register(PatientStatus,PatientStatusAdmin)