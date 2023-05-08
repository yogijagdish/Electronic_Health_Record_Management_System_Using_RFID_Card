from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from authentication import serializers
from authentication.models import User

from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    }

class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token':token,'msg':'User Registration is Sucessful'},status=status.HTTP_201_CREATED)
        return Response({'msg':'User Registration is unsucessful'},status=status.HTTP_400_BAD_REQUEST)

class DoctorLoginView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')

            user = authenticate(email=email,password=password)

            if user is not None:
                print(serializer.data)
                userdata = User.objects.get(email=email)
                print(userdata.is_doctor)
                if user.is_doctor == True:
                    token = get_tokens_for_user(user)
                    return Response({'token':token,'user':'doctor',"msg":"Login Sucessful"},status=status.HTTP_200_OK)
                else:
                    return Response({'msg':'No doctor found'},status=status.HTTP_401_UNAUTHORIZED)

            else:
                return Response({'msg':'User Doesnot Exist'},status=status.HTTP_404_NOT_FOUND)

        else:
            return Response({'msg':'Login Unsucessful'},status=status.HTTP_400_BAD_REQUEST)


class ReceptionLoginView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')

            user = authenticate(email=email,password=password)

            if user is not None:
                print(serializer.data)
                userdata = User.objects.get(email=email)
                print(userdata.is_reception)
                if userdata.is_reception == True:
                    token = get_tokens_for_user(user)
                    return Response({'token':token,'user':'admin','msg':'Reception Login Sucessful'},status=status.HTTP_200_OK)
            else:
                return Response({'msg':'No Receptionist found'},status=status.HTTP_404_NOT_FOUND)

        else:
            return Response({'msg':'User not found'},status=status.HTTP_404_NOT_FOUND)



class UserProfileView(APIView):
    def get(self,request,format=None):
        serializer = serializers.UserProfileSerializer(request.user)
        print(serializer.data)
        return Response(serializer.data,status=status.HTTP_302_FOUND)


# {
# "email":"yogi@jagdiosh.com",
# "name":"JD",
# "date_of_birth":"2015-03-15",
# "password":"abcd",
# "password2":"abcd",
# "is_doctor":"True",
# "is_patient":"False",
# "is_reception":"False"
# }
