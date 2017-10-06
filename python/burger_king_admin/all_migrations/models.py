# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Orders(models.Model):
	id=models.AutoField(primary_key=True)
 	date_of_business=models.DateTimeField()
	store_id=models.IntegerField()
 	employee_id=models.IntegerField()
 	check_number=models.IntegerField()
 	item_id=models.IntegerField()
 	order_mode_id=models.IntegerField()
 	day_part_id=models.IntegerField()
 	price=models.FloatField()
 	disc_price=models.FloatField()
 	quick_combo_id=models.IntegerField()
 	created_at=models.DateTimeField(auto_now_add=True)
  	updated_at=models.DateTimeField(auto_now=True)
  	system_date=models.DateTimeField()

 	# def __str__(self):
 	# 	return self.id
 	class Meta:
 		db_table="orders"


class Store_Details(models.Model):
	id=models.AutoField(primary_key=True)
	store_id=models.IntegerField()
	region=models.CharField(max_length=128)
	state=models.CharField(max_length=128)
	city=models.CharField(max_length=128)
	store_name=models.CharField(max_length=128)
	opening_date=models.DateTimeField('%Y-%m-%d %H:%M:%S')
	regional_manager=models.CharField(max_length=128)
	area_lead=models.CharField(max_length=128)
	is_open=models.IntegerField()
	is_DT=models.IntegerField()
	is_DL=models.IntegerField()
	store_format=models.CharField(max_length=128)
	bk_store_id=models.IntegerField()
	region_id=models.IntegerField()
	city_id=models.IntegerField()
	store_short_name=models.CharField(max_length=128)

 	# def __str__(self):
 	# 	return self.id
 	class Meta:
 		db_table="store_details"

 	
