from rest_framework import serializers
from jica.models import Officer, Farmer, Report, Season, District, Subcounty, Parish


class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = ('name', 'login_id', 'district', 'phone', 'password')

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = ('name', 'district', 'subcounty', 'parish', 'village', 'gender', 'age', 'marriage_status', 'language', 'telephone', 'image', 'community_status', 'instructor_possibility', 'farm_area', 'crop_type', 'past_harvest')

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('season_name', 'season_id', 'season', 'area', 'harvest')

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('name', 'season', 'area', 'rice_type', 'sowing_date', 'sowing_type', 'planting_type', 'levelling', 'fertilizer', 'fertilizer1_type', 'fertilizer1_amount', 'fertilizer2_type',  'fertilizer2_amount', 'weed_condition', 'weed_weed_times', 'note', 'image_1', 'image_2', 'image_3')        


