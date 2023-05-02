from django.urls import path
from authentication import views

urlpatterns = [
    path('register/',views.UserRegistrationView.as_view()),
    path('login/',views.UserLoginView.as_view()),
    path('profile/',views.UserProfileView.as_view()),
]
