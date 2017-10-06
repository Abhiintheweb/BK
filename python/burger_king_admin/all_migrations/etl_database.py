
import pymssql
# import pymysql

server ="114.79.159.179"
user ="i4t"
password ="Pass123#"


class EtlDataBase(object):
	def __init__(self):
		self.conn = pymssql.connect(server, user, password, "ALOHAINSIGHT",as_dict=True)
	def get_cursor(self):
		self.cursor=self.conn.cursor()
		# return self.cursor()

	def cursor_close(self):
		self.cursor.close()

	def get_data_from_query(self,query):
		try:
			self.get_cursor()
			self.cursor.execute(query)
			return self.cursor.fetchall()
		except Exception as e:
			return e
		





