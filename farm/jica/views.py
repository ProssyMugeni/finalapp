from django.shortcuts import render
from django.http import HttpResponse
from .models import Officer
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserLoginForm


def home(request):
     
    return HttpResponse ('welcome')



