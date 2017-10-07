
from all_migrations.models import Orders, Store_Details	
import etl_database 
etl_db=etl_database.EtlDataBase()






class sync_data_from_remote_database():

	def __init__(self):
		pass

	def in_sync(self,target_table,source_table):
		data=etl_db.get_data_from_query("""SELECT TOP 1 UNIQueID FROM dpvHstGndItem ORDER BY UNIQueID DESC""")  
		target_table=Orders.objects.values('source_unique_id').order_by("-id")[:1]
		target_table=list(target_table)
		
		if target_table == []:
			return False
		elif target_table[0]["source_unique_id"] != data[0]["UNIQueID"]:
			return False
		elif target_table[0]["source_unique_id"] == data[0]["UNIQueID"]:
			return True
	def get_last_inserted_in_target_table(self):

		target_table=Orders.objects.values('source_unique_id').order_by("-id")[:1]
		target_table=list(target_table)

		if target_table:
			return target_table[0]["source_unique_id"]
		else:
			return 0

	def get_data_from_source(self,last_synced_id):


		data=etl_db.get_data_from_query("""SELECT TOP 100000 DateOfBusiness as date_of_business,
                    SystemDate as system_date,UNIQueID as source_unique_id,
                    
                    FKStoreId as store_id,
                    FKEmployeeNumber as employee_id,
                    CheckNumber as check_number,
                    FKItemId as item_id,
                    FKOrderModeId as order_mode_id,
                    FKDayPartId as day_part_id,
                    Price as price,
                    DiscPric as disc_price,
                    QSQuickComboId as quick_combo_id
                FROM dpvHstGndItem WHERE UNIQueID > {}""".format(last_synced_id)) 

		return data

	def insert_data_in_target_table(self,data):

		all_orders_details=[]
		for i in data:
			all_orders_details.append(Orders(store_id=i["store_id"],employee_id=i["employee_id"],
                                    check_number=i["check_number"],item_id=i["item_id"],order_mode_id=i["order_mode_id"],
                                    day_part_id=i["day_part_id"],price=i["price"],
                                    disc_price=i["disc_price"],
                                    quick_combo_id=i["quick_combo_id"],
                                    system_date=i["system_date"],
                                    date_of_business=i["date_of_business"],
                                    source_unique_id=i["source_unique_id"]

                                    ))

		response=Orders.objects.bulk_create(all_orders_details,batch_size=100)  
		return response




			
		

    
