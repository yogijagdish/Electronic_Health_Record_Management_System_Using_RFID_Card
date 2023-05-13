from django.urls import path
from userprofile import views

urlpatterns = [
    path('user-data/',views.UserData.as_view()),
    path('save-user/',views.UserDataStore.as_view()),
]
