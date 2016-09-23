'''
Created on Sep 20, 2016

@author: dave
'''
from __future__ import unicode_literals

from django.contrib import admin

from .models import Category


class CategoryAdmin(admin.ModelAdmin):
    model = Category

admin.site.register(Category, CategoryAdmin)


# @admin.register(Item)
# class ItemAdmin(admin.ModelAdmin):
#
#     fieldsets = (
#         (None, {
#             'fields': (('publisher', 'number'), ('title', 'notes'))
#         }),
#         ('Pricing', {
#             'fields': (('grade', 'nm_price', 'price'), 'grade_notes')
#         }),
#         ('Stock', {
#             'fields': (('stock', 'back', 'box'),)
#         }),
#         ('Additional Info', {
#             'classes': ('collapse',),
#             'fields': (('want_list', 'collection'),)
#         }),
#
#
#     )
#
#     list_display = ('publisher', 'get_number', 'title', 'notes', 'nm_price', 'price',
#                     'stock', 'grade', 'grade_notes', 'back', 'box', 'want_list', 'collection')
#     list_display_links = ('publisher', 'get_number', 'title')
#     list_editable = ('nm_price', 'price', 'stock', 'grade', 'back', 'box', 'want_list', 'collection')
#     list_filter = ('publisher', 'grade', 'want_list', 'collection')
#
#     save_as = True
#     save_on_top = True
#
#     search_fields = ('title',)
#
#     def get_publisher(self, obj):
#         return obj.publisher
#     get_publisher.short_description = 'Publisher'
#     get_publisher.admin_order_field = 'publisher'
#
#     def get_grade(self, obj):
#         return obj.grade
#     get_grade.short_description = 'Grade'
#     get_grade.admin_order_field = 'grade'
