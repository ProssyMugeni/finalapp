from django.db import models
from django.contrib.auth.models import User

class Officer(models.Model):
    name = models.CharField(max_length=20, null=True)
    login_id= models.CharField(max_length=20,unique=True, null=True)
    district = models.ForeignKey('District', on_delete=models.CASCADE, null=True)
    subcounty = models.ForeignKey('Subcounty', on_delete=models.CASCADE, null=True)
    parish = models.ForeignKey('Parish', on_delete=models.CASCADE, null=True)
    phone = models.CharField(max_length=20, null=True)
    password = models.CharField(max_length=20, null=True)


def __str__(self):
        return self.name


       

class Farmer(models.Model):
    name =models.CharField(max_length=20, null=True)
    district = models.ForeignKey('District', on_delete=models.CASCADE, null=True)
    subcounty = models.ForeignKey('Subcounty', on_delete=models.CASCADE, null=True)
    parish =  models.ForeignKey('Parish', on_delete=models.CASCADE, null=True)
    village =models.CharField(max_length=20, null=True)
    gender = models.CharField(max_length=20, null=True)
    age = models.IntegerField(null=True)
    Marriage_status =  models.CharField(max_length=20, null=True)
    language =models.CharField(max_length=20, null=True)
    telephone = models.CharField(max_length=20, null=True)
    image = models.ImageField(null=True, blank=True)
    community_status=  models.CharField(max_length=20, null=True)
    instructor_possibility = models.NullBooleanField
    farm_area = models.CharField(max_length=20, null=True) 
    crop_type = models.CharField(max_length=20, null=True)
    past_harvest = models.CharField(max_length=20, null=True)
    

    def __str__(self):
        return self.name


class Season(models.Model):
    season_name = models.CharField(max_length=20, null=True)
    season_id = models.CharField(max_length=20, null=True)
    season =models.CharField(max_length=20, null=True)
    area = models.CharField(max_length=20, null=True)
    harvest = models.CharField(max_length=20, null=True)
    
    

def __str__(self):
    return self.name

class Report(models.Model):
    name =models.CharField(max_length=20, null=True)
    season = models.CharField(max_length=20, null=True)
    area = models.CharField(max_length=20, null=True)
    rice_type =  models.CharField(max_length=20, null=True)
    sowing_date =models.CharField(max_length=20, null=True)
    sowing_type = models.CharField(max_length=20, null=True)
    planting_type = models.CharField(max_length=20, null=True)
    levelling =  models.CharField(max_length=20, null=True)
    ridge =models.CharField(max_length=20, null=True)
    watercourse_state = models.CharField(max_length=20, null=True)
    fertilizer = models.CharField(max_length=20, null=True)
    fertilizer1_type =  models.CharField(max_length=20, null=True)
    fertilizer1_amount = models.CharField(max_length=20, null=True)
    fertilizer2_type = models.CharField(max_length=20, null=True) 
    fertilizer2_amount= models.CharField(max_length=20, null=True)
    weed_condition = models.CharField(max_length=20, null=True)
    total_weed_times = models.CharField(max_length=20, null=True)
    harvest_date = models.CharField(max_length=20, null=True)
    harvest_amount =  models.CharField(max_length=20, null=True)
    note = models.CharField(max_length=20, null=True) 
    image_1 = models.ImageField( null=True, blank=True)
    image_2 = models.ImageField( null=True, blank=True)
    image_3 = models.ImageField( null=True, blank=True)
    image_4 = models.ImageField( null=True, blank=True)
     
    

    def __str__(self):
        return self.name

#District Model
class District(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

	
#Subcounty Model
class Subcounty(models.Model):
    name=models.CharField(max_length=200)
	
	#Here we relate the district to the subcounty... each district has many subcounties but each subcounty belongs to only one District
    district = models.ForeignKey('District', on_delete=models.CASCADE,  # related_name='district', 
    null=True)
    def __str__(self):
        return self.name

class Parish(models.Model):
    name=models.CharField(max_length=200)
	
	#same as subcounty each parish belonngs to one subcounty but a subcounty has many parishes
    sub_county = models.ForeignKey('Subcounty', on_delete=models.CASCADE, #related_name='sub_county',
     null=True)
    def __str__(self):
        return self.name

