from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Officer


class UserLoginForm(forms.ModelForm):
    class Meta:
        model = Officer
        fields = ['login_id', 'password' ]
        extra_kwargs= {
            'password':{'write_only':True}
        }