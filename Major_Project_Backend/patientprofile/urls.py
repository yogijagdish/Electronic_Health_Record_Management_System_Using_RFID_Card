from django.urls import path

from patientprofile import views

urlpatterns = [
    path('get-data/',views.PatientDataView.as_view()),
    path('patient-update/',views.PatientUpdate.as_view()),
    path('search/',views.UserSearchView.as_view()),
    path('patient-status/<int:pk>',views.PatientStatusView.as_view()),
    path('create-status/',views.CreatePatientStatusView.as_view()),
    path('asign-doctor/',views.AsignDoctorView.as_view()),
    path('add-report/',views.PatientReportView.as_view()),
    path('show-report/',views.DisplayReportView.as_view()),
    path('update-status/',views.PatientChangeStatus.as_view()),
    path('show-photo/',views.ShowPhoto.as_view()),
]
