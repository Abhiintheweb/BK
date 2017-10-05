# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.views import View
from all_migrations.models import Orders, Store_Details	

import etl_database 
etl_db=etl_database.EtlDataBase()

class GreetingView(View):


    # def get(self, request):    	
    # 	data=etl_db.get_data_from_query("""SELECT TOP 100000 Amount as discounted_amount,DateOfBusiness as date_of_business,
    #             EntryId as order_id,FKCategoryId as category_id,FKItemId as product_id,
    #             FKStoreId as store_id,OriginalPrice as menu_price,Price as price_after_discount,
    #             UniqueID as migration_table_entry_id                
    #            FROM dpvHstGndLine""")    	
    # 	all_orders=[]
    # 	for i in data:
    # 		all_orders.append(Orders(store_id=i["store_id"],order_id=i["order_id"],
				# 					date_of_business=i["date_of_business"],
				# 					menu_price=i["menu_price"],
				# 					discounted_amount=i["discounted_amount"],
				# 					price_after_discount=i["price_after_discount"],
				# 					product_id=i["product_id"],
				# 					migration_table_entry_id=i["migration_table_entry_id"]))
    	
    # 	Orders.objects.bulk_create(all_orders,batch_size=100)    	
    #     return HttpResponse("completed etl")




    # def get(self, request): 

    #     data=etl_db.get_data_from_query("""SELECT Site_Code as store_id , Region as region, State as state ,City as city ,
    #             Store_Name as store_name, Opening_Date as opening_date, 
    #             Regional_Manager as regional_manager, Area_Lead as area_lead, is_open, is_DT, is_DL,
    #             Store_Format as store_format, BK_StoreID as bk_store_id, region_id, city_id,
    #             Report_Name as store_short_name               
    #             FROM BK_Site_Master""")       
    
    #     all_stores_details=[]
    
    #     for i in data:
    #         all_stores_details.append(Store_Details(store_id=i["store_id"],region=i["region"],
    #                                 state=i["state"],city=i["city"],store_name=i["store_name"],
    #                                 opening_date=i["opening_date"],regional_manager=i["regional_manager"],
    #                                 area_lead=i["area_lead"],
    #                                 is_open=i["is_open"],is_DT=i["is_DT"],
    #                                 is_DL=i["is_DL"],
    #                                 bk_store_id=i["bk_store_id"],store_format=i["store_format"],
    #                                 region_id=i["region_id"],city_id=i["city_id"],
    #                                 store_short_name=i["store_short_name"]
    #                                 ))

    #     Store_Details.objects.bulk_create(all_stores_details,batch_size=100)       
    #     return HttpResponse("completed etl")

    def get(self, request): 

        data=etl_db.get_data_from_query("""SELECT TOP 100000 DateOfBusiness as date_of_business,
                    FKStoreId as store_id,
                    FKEmployeeNumber as employee_id,
                    CheckNumber as check_number,
                    FKItemId as item_id,
                    FKOrderModeId as order_mode_id,
                    FKDayPartId as day_part_id,
                    Price as price,
                    DiscPric as disc_price,
                    QSQuickComboId as quick_combo_id
                FROM dpvHstGndItem""")       
    
        all_orders_details=[]

        for i in data:
            all_orders_details.append(Orders(store_id=i["store_id"],employee_id=i["employee_id"],
                                    check_number=i["check_number"],item_id=i["item_id"],order_mode_id=i["order_mode_id"],
                                    day_part_id=i["day_part_id"],price=i["price"],
                                    disc_price=i["disc_price"],
                                    quick_combo_id=i["quick_combo_id"]
                                    ))

        Orders.objects.bulk_create(all_orders_details,batch_size=100)       
        return HttpResponse("completed etl")


