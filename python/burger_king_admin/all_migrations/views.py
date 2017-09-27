# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.




from django.http import HttpResponse
from django.views import View
from all_migrations.models import Orders	

import etl_database 
etl_db=etl_database.EtlDataBase()

class GreetingView(View):


    def get(self, request):    	
    	data=etl_db.get_data_from_query("""SELECT TOP 100000 Amount as discounted_amount,DateOfBusiness as date_of_business,
                EntryId as order_id,FKCategoryId as category_id,FKItemId as product_id,
                FKStoreId as store_id,OriginalPrice as menu_price,Price as price_after_discount,
                UniqueID as migration_table_entry_id                
               FROM dpvHstGndLine""")    	
    	all_orders=[]
    	for i in data:
    		all_orders.append(Orders(store_id=i["store_id"],order_id=i["order_id"],
									date_of_business=i["date_of_business"],
									menu_price=i["menu_price"],
									discounted_amount=i["discounted_amount"],
									price_after_discount=i["price_after_discount"],
									product_id=i["product_id"],
									migration_table_entry_id=i["migration_table_entry_id"]))
    	
    	Orders.objects.bulk_create(all_orders,batch_size=100)    	
        return HttpResponse("completed etl")