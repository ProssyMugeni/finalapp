from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializer import OfficerSerializer,  FarmerSerializer,  SeasonSerializer, ReportSerializer
from jica.models import Officer, Farmer, Season, Report, District, Subcounty, Parish

class OfficerListView(ListAPIView):
    queryset=Officer.objects.all()
    serializer_class = OfficerSerializer


class OfficerDetailView(RetrieveAPIView):
    queryset=Officer.objects.all()
    serializer_class = OfficerSerializer



class FarmerListView(ListAPIView):
    queryset=Farmer.objects.all()
    serializer_class = FarmerSerializer


class FarmerDetailView(RetrieveAPIView):
    queryset=Farmer.objects.all()
    serializer_class = FarmerSerializer


class  SeasonListView(ListAPIView):
    queryset=Season.objects.all()
    serializer_class = SeasonSerializer


class SeasonDetailView(RetrieveAPIView):
    queryset=Season.objects.all()
    serializer_class = SeasonSerializer


class ReportListView(ListAPIView):
    queryset=Report.objects.all()
    serializer_class = ReportSerializer


class ReportDetailView(RetrieveAPIView):
    queryset=Report.objects.all()
    serializer_class = ReportSerializer
 