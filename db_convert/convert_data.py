'''
Created on Sep 21, 2016

@author: dave
'''
from pymongo import MongoClient
client = MongoClient()

mongodb = client['eternity-ready']


import MySQLdb

db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="",  # your password
                     db="jfarris_phpmelody")        # name of the data base

# you must create a Cursor object. It will let
#  you execute all the queries you need
cur = db.cursor()

# Use all the SQL you like
cur.execute("SELECT * FROM pm_embed_code")

# print all the first cell of all the rows
for row in cur.fetchall():
    embed_code = unicode(row[2], "utf-8", errors='replace')
    _ = mongodb.channels.update({"uniqueId": row[1]}, {"$set": {"embedCode": embed_code}})


db.close()
