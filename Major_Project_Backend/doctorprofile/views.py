from rest_framework.views import APIView
from rest_framework.response import Response

from doctorprofile.serializers import UploadImageSerializer

from rest_framework.parsers import FormParser,MultiPartParser



class UploadImageView(APIView):
    parser_classes = [MultiPartParser,FormParser]

    def post(self,request,format=None):
        serializer = seriUploadImageSerializer(data=request.data)
        # print(serializer.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'msg':'image sucessfully uploaded'})
