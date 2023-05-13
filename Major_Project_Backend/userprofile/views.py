from rest_framework.response import Response
from rest_framework.views import APIView
from authentication.models import User

from userprofile import serializers

# Create your views here.
class UserData(APIView):
    def post(self,request,format=None):
        print(type(request.data))

        dict = request.data
        print[dict.get['email']]


        data = User.objects.get(email="doctor@doctor.com")
        serializer = serializers.UserProfileSerializer(data)
        print(serializer.data)
        
        return Response(serializer.data)

class UserDataStore(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserDataStorageSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'msg':'Data is stored'})

