from django.contrib import admin
from doctor.models import DoctorProfile

# Register your models here.
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['specialization','phone_number','permanent_address','current_address','bachelor']
    list_filter = ['specialization']

admin.site.register(DoctorProfile,DoctorAdmin)

