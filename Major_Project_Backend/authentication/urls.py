from django.urls import path
from authentication import views

urlpatterns = [
    path('register/',views.UserRegistrationView.as_view()),
    path('login-doctor/',views.DoctorLoginView.as_view()),
    path('login-reception',views.ReceptionLoginView.as_view()),
    path('profile/',views.UserProfileView.as_view()),
]
