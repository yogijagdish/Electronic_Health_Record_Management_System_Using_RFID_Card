from django.urls import path
from doctor import views


urlpatterns = [
    path('register/',views.DoctorDashboardView.as_view()),
]