from django.urls import path
from .views import OfficerDetailView, OfficerListView, FarmerDetailView, FarmerListView, ReportDetailView, ReportListView, SeasonDetailView, SeasonListView



urlpatterns = [
    path('', OfficerListView.as_view ()),
    path('<pk>', OfficerDetailView.as_view ()),

    path('', FarmerListView.as_view ()),
    path('<pk>', FarmerDetailView.as_view ()),

    path('', SeasonListView.as_view ()),
    path('<pk>', SeasonDetailView.as_view ()),

    path('', ReportListView.as_view ()),
    path('<pk>', ReportDetailView.as_view ()),
   
]
