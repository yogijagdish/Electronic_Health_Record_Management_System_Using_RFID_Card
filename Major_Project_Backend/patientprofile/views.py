from rest_framework.response import Response
from rest_framework.views import APIView

from patientprofile import serializers
from authentication.models import User
from patientprofile.models import PatientInformation



from authentication import serializers as serial
# Create your views here.
class PatientDataView(APIView):
    def get(self,request,format=None):
        serializer = serial.UserProfileSerializer(request.user)
        id = serializer.data['id']
        print(serializer.data['id'])
        patient = PatientInformation.objects.get(user_id = id)
        patserial = serializers.PatientDataSerializer(patient)
        print(patserial.data)
        return Response(patserial.data)

    # def post(self,request,format=None):
    #     serializer = serial.UserProfileSerializer(request.user)
    #     id = serializer.data['id']
    #     input_data = request.data
    #     input_data['user_id'] = id
    #     patserial = serializers.PatientDataSerializer(data = input_data)
    #     patserial.is_valid(raise_exception=True)
    #     patserial.save()
    #     return Response({'msg':'data saved successfully'})

class PatientUpdate(APIView):
    def post(self,request,format=None):
        print('requst-data',request.data)
        print(request.user)
        input_data = request.data
        input_data['user_id'] = request.user.id
        print(input_data)
        serializer = serializers.PatientDataSerializer(data=request.data,context={'user':request.user})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'msg':'Data saved successfully'})


## for searching the user

class UserSearchView(APIView):
    def get(self,request):
        query = request.GET.get('q','')
        users = User.objects.filter(email__icontains=query)
        serialized_user = serializers.UserSerializer(users,many=True)
        return Response(serialized_user.data)
        
        