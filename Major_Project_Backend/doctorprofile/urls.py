from django.urls import path
from doctorprofile import views

urlpatterns = [
    path('upload-image/',views.UploadImageView.as_view()),
    path('upcoming-patient/',views.DoctorUpcomingPatientView.as_view()),
    path('treated-patient/',views.DoctorTreatedPatientView.as_view()),
]
