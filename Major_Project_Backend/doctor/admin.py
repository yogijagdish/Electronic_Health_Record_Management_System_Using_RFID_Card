from django.contrib import admin
from doctor.models import DoctorProfile

# Register your models here.

class DoctorProfileAdmin(admin.ModelAdmin):
    list_display = ['image']

admin.site.register(DoctorProfile,DoctorProfileAdmin)