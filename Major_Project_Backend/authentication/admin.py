from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from authentication.models import User

# Register your models here.

class UserAdmin(BaseUserAdmin):

    list_display = ['email','name','date_of_birth','is_admin']
    list_filter = ['is_admin']
    fieldsets = (
        ( 'Log In Credentials', {'fields': ('email','password')}),
        ('Personal Information', {'fields': ('name','date_of_birth')}),
        ('Permissions', {'fields': ('is_admin',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','date_of_birth','password1','password2'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal =()


admin.site.register(User,UserAdmin)