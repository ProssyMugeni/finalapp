from django.contrib import admin
from .models import Officer, Farmer, Season, Report, District, Parish, Subcounty 
from import_export.admin import ImportExportModelAdmin


admin.site.site_header = 'Jica Pride Administration'



@admin.register(Season)
class SeasonAdmin(ImportExportModelAdmin):
    list_display =('season_name', 'season_id')
    search_fields = ('season_name', 'season_id')
    list_filter =('season_name', 'season_id')
    
@admin.register(Officer)
class OfficerAdmin(ImportExportModelAdmin):
     list_display = ('name', 'login_id', 'password', 'phone', 'district', 'subcounty', 'phone')
     search_fields = ('name', 'login_id', 'district','subcounty')
     list_filter =('name', 'login_id', 'district','subcounty')

@admin.register(Farmer)
class FarmerAdmin(ImportExportModelAdmin):
     pass
     # list_display = ('name', 'district', 'subcounty', 'telephone', 'farm_area', 'crop_type')
     # search_fields = ('name', 'district','subcounty' , 'farm_area')
     # list_filter =('name', 'district','subcounty' , 'farm_area')


@admin.register(District)
class DistrictAdmin(ImportExportModelAdmin):
     pass

@admin.register(Subcounty)
class SubcoutyAdmin(ImportExportModelAdmin):
     pass

@admin.register(Parish)
class ParishAdmin(ImportExportModelAdmin):
     pass

@admin.register(Report)
class ReportAdmin(ImportExportModelAdmin):
     pass
     # list_display = ('name', 'season', 'area')
     # search_fields = ('name', 'season', 'area')
     # list_filter = ('name', 'season', 'area')