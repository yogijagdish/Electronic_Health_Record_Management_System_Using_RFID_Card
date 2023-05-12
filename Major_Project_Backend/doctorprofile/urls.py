from django.urls import path
from doctorprofile import views

urlpatterns = [
    path('upload-image/',views.UploadImageView.as_view())
]
