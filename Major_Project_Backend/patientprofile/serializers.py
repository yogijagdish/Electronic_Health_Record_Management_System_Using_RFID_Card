from rest_framework import serializers

from patientprofile.models import PatientInformation

class PatientDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientInformation
        fields = ['user_id','patient_name','gender','permanent_address','chitizenship_num','father_name','mother_name']
        extra_kwargs = {
            'user_id': {'source': 'user'}
        }
