from django.contrib import admin
from doctor.models import DoctorProfile,ContactDetails,Hospital,Qualification

# Register your models here.
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['specialization','hospital']
    list_filter = ['specialization']


class HospitalAdmin(admin.ModelAdmin):
    list_display = ['name','location']
    list_filter = ['name']

class ContactAdmin(admin.ModelAdmin):
    list_display = ['phone_number','permanent_address','current_address']
    list_filter = ['current_address']

class QualificationAdmin(admin.ModelAdmin):
    list_display = ['bachelor','master','phd']
    list_filter = ['bachelor']

admin.site.register(DoctorProfile,DoctorAdmin)

admin.site.register(Hospital,HospitalAdmin)

admin.site.register(ContactDetails,ContactAdmin)

admin.site.register(Qualification,QualificationAdmin)
