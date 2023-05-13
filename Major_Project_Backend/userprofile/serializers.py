from rest_framework import serializers

from authentication.models import User

from patientprofile.models import PatientInformation

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','is_doctor','is_patient','is_reception']

class UserDataStorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientInformation
        fields = '__all__'