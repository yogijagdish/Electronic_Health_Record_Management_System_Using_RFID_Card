from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from authentication import serializers
# Create your views here.

class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({'msg':'User Registration is Sucessful'},status=status.HTTP_201_CREATED)
        return Response({'msg':'User Registration is unsucessful'},status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')

            user = authenticate(email=email,password=password)

            if user is not None:
                print(serializer.data)
                return Response({"msg":"Login Sucessful"},status=status.HTTP_200_OK)

            else:
                return Response({'msg':'User Doesnot Exist'},status=status.HTTP_404_NOT_FOUND)

        else:
            return Response({'msg':'Login Unsucessful'},status=status.HTTP_400_BAD_REQUEST)


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
