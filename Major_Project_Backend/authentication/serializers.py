from rest_framework import serializers
from authentication.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(max_length=255,style={'input_type':'password'},write_only=True)
    class Meta:
        model = User
        fields = ["email","name","date_of_birth","password","password2","is_doctor","is_patient","is_reception"]
        extra_kwargs = {'password':{'write_only':True}}

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError('Password and Confirm Password Doesnot Match')
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ["email","password"]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","email","name","date_of_birth","is_doctor"]
