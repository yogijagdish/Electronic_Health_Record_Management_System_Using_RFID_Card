from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser


# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self,email,name,date_of_birth,password=None,password2=None,is_doctor=False,is_patient=False,is_reception=False):
        if not email:
            raise ValueError("User must have a valid user address")
        
        user = self.model(
            email=self.normalize_email(email),
            name=name,
            date_of_birth=date_of_birth,
            is_doctor = is_doctor,
            is_patient = is_patient,
            is_reception = is_reception
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,name,date_of_birth,password=None):
        user = self.create_user(
            email,
            password=password,
            date_of_birth=date_of_birth,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email Address',
        max_length=255,
        unique=True
    )

    name = models.CharField(max_length=255)
    date_of_birth = models.DateField()

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)
    is_reception = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','date_of_birth']

    def __str__(self):
        return self.email
    
    def has_perm(self,perm,obj=None):
        "Does the user have a specific permissions?"
        return self.is_admin

    def has_module_perms(self,app_label):
        "Does the user have permission to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff"

        return self.is_admin
