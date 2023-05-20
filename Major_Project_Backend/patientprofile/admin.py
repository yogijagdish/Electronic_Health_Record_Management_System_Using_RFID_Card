from django.contrib import admin
from patientprofile.models import PatientInformationDetail,PatientStatus,PatientReport

# Register your models here.
class PatientInformationAdmin(admin.ModelAdmin):
    list_display = ['name','father_name','mother_name','photo']

class PatientStatusAdmin(admin.ModelAdmin):
    list_display = ['user_id','is_available','is_treated','problem','doctor']

class PatientReportAdmin(admin.ModelAdmin):
    list_display = ['user_id','test','date','report']

admin.site.register(PatientInformationDetail,PatientInformationAdmin)
admin.site.register(PatientStatus,PatientStatusAdmin)
admin.site.register(PatientReport,PatientReportAdmin)