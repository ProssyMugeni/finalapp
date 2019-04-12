from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name ='jica-home'),
    path('home', views.home, name ='jica-home'),
   
]
