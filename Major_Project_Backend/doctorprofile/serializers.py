from doctorprofile.models import DoctorProfile
from rest_framework import serializers


class UploadImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorProfile
        fields = ['image']
