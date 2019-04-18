from django.urls import path,include
from .views import OfficerDetailView, OfficerListView, FarmerDetailView, FarmerListView, ReportDetailView, ReportListView, SeasonDetailView, SeasonListView



urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/officer', OfficerListView.as_view ()),
    path('<pk>', OfficerDetailView.as_view ()),

    path('api/farmer', FarmerListView.as_view ()),
    path('<pk>', FarmerDetailView.as_view ()),

    path('api/season', SeasonListView.as_view ()),
    path('<pk>', SeasonDetailView.as_view ()),

    path('api/report', ReportListView.as_view ()),
    path('<pk>', ReportDetailView.as_view ()),
   
]
