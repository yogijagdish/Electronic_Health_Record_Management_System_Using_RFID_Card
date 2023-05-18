from doctorprofile.models import DoctorProfile
from rest_framework import serializers

from patientprofile.models import PatientStatus

from authentication.models import User


class UploadImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorProfile
        fields = ['image']


class DoctorUpcomingPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientStatus
        fields = ['user_id','is_available','is_treated','problem']

class UserDataSerialier(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name','email','date_of_birth']
