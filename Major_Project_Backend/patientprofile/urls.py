from django.urls import path

from patientprofile import views

urlpatterns = [
    path('get-data/',views.PatientDataView.as_view()),
    path('patient-update/',views.PatientUpdate.as_view()),
]
