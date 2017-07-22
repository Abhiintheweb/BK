# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Orders(models.Model):
	id=models.AutoField(primary_key=True)
 	store_id=models.IntegerField()
 	order_id=models.IntegerField()
 	date_of_business=models.DateTimeField()
 	menu_price=models.FloatField()
 	discounted_amount=models.FloatField()
 	price_after_discount=models.FloatField()
 	product_id=models.IntegerField()
 	migration_table_entry_id=models.IntegerField()
 	created_at=models.DateTimeField(auto_now_add=True)
  	updated_at=models.DateTimeField(auto_now=True)

 	# def __str__(self):
 	# 	return self.id
 	class Meta:
 		db_table="orders"

 	
