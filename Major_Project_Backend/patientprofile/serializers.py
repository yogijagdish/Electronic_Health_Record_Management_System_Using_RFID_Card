from rest_framework import serializers

from patientprofile.models import PatientInformation,PatientStatus,PatientReport

from authentication.models import User

class PatientDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientInformation
        fields = ['user_id','patient_name','gender','permanent_address','chitizenship_num','father_name','mother_name']
        extra_kwargs = {
            'user_id': {'source': 'user'}
        }

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name']

class PatientStatusSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = PatientStatus
        fields = ['user_id','is_available','is_treated','problem','doctor']

        extra_kwargs = {
            'user_id': {'source': 'user'},
        }


class AsignDoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email','name','is_doctor']

        def validate(self,attrs):
            is_doctor = attrs.get('is_doctor')
            if is_doctor == True:
                return attrs


class PatientReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientReport
        fields = ['user_id','test','report']
        extra_kwargs = {
            'user_id': {'source': 'user'},
        }

class DisplayReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientReport
        fields = ['user_id','test','date','report']