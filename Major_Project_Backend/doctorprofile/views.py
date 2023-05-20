from rest_framework.views import APIView
from rest_framework.response import Response

from django.forms.models import model_to_dict

from doctorprofile.serializers import UploadImageSerializer,DoctorUpcomingPatientSerializer,UserDataSerialier

from rest_framework.parsers import FormParser,MultiPartParser

from patientprofile.models import PatientStatus
from authentication.models import User



class UploadImageView(APIView):
    parser_classes = [MultiPartParser,FormParser]

    def post(self,request,format=None):
        serializer = UploadImageSerializer(data=request.data)
        # print(serializer.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'msg':'image sucessfully uploaded'})


# class DoctorUpcomingPatientView(APIView):
#     def get(self,request,format=None):
#         user = request.user
#         print(user.id)
#         patients = PatientStatus.objects.filter(doctor=user.id)
#         serialized_data = []

#         for patient in patients:
#             user_obj = User.objects.get(id=patient.user.id)
#             user_data = model_to_dict(user_obj)
#             patient_data = {
#                 'patient_id': patient.user_id,
#                 'user': user_data
#             }
#             serialized_patient = DoctorUpcomingPatientSerializer(patient).data
#             serialized_patient.update(patient_data)
#             serialized_data.append(patient_data)

#         print(serialized_data)
#         return Response(serialized_data)

class DoctorUpcomingPatientView(APIView):
    def get(self,request,format=None):
        user = request.user
        patients = PatientStatus.objects.filter(doctor=user.id).filter(is_treated=False)

        relevent_data = []

        for patient in patients:
            user_data = User.objects.get(id=patient.user_id)

            serialized_user = UserDataSerialier(user_data)

            print(serialized_user.data)

            serialized_data = DoctorUpcomingPatientSerializer(patient)
            
            print(serialized_data.data)

            combined_data = {
                'user': serialized_user.data,
                'patient': serialized_data.data
            }

            relevent_data.append(combined_data)
        
        return Response(relevent_data)
    

class DoctorUpcomingPatientView(APIView):
    def get(self,request,format=None):
        user = request.user
        patients = PatientStatus.objects.filter(doctor=user.id).filter(is_treated=False)

        relevent_data = []

        for patient in patients:
            user_data = User.objects.get(id=patient.user_id)

            serialized_user = UserDataSerialier(user_data)

            print(serialized_user.data)

            serialized_data = DoctorUpcomingPatientSerializer(patient)
            
            print(serialized_data.data)

            combined_data = {
                'user': serialized_user.data,
                'patient': serialized_data.data
            }

            relevent_data.append(combined_data)
        
        return Response(relevent_data)

class DoctorTreatedPatientView(APIView):
    def get(self,request,format=None):
        user = request.user
        patients = PatientStatus.objects.filter(doctor=user.id).filter(is_treated=True)


        relevent_data = []

        for patient in patients:
            user_data = User.objects.get(id=patient.user_id)

            serialized_user = UserDataSerialier(user_data)

            print(serialized_user.data)

            serialized_data = DoctorUpcomingPatientSerializer(patient)
            
            print(serialized_data.data)

            combined_data = {
                'user': serialized_user.data,
                'patient': serialized_data.data
            }

            relevent_data.append(combined_data)
        
        return Response(relevent_data)