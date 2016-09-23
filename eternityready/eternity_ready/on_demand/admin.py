'''
Created on Sep 20, 2016

@author: dave
'''
from __future__ import unicode_literals

from django.contrib import admin

from forms import VideoForm
from .models import Video


def categories(instance):
    return ', '.join(instance.categoryNames)


class VideoAdmin(admin.ModelAdmin):
    form = VideoForm
    list_display = ['title', categories, 'disabled', 'fix', 'comment']

    readonly_fields = ('slug', 'image_tag')

    fieldsets = [
        (None,
         {
             'fields': (('title', 'slug'), 'age',)}
         ),
        ('Rating',
         {
             'fields': ('rating',)}
         ),
        ('Description',
         {
             'classes': ('full-width',),
             'fields': ('description',)}
         ),
        ('Embed Code',
         {
             'classes': ('full-width',),
             'fields': ('embedCode',)}
         ),
        (None,
         {
             'fields': ('video', ('picture', 'image_tag'), )}
         ),
        ('Categories',
         {
             'classes': ('full-width',),
             'fields': ('categoryIds',)}
         ),


    ]

    search_fields = ('title',)

    def get_changelist_form(self, request, **kwargs):
        kwargs.setdefault('form', VideoForm)
        return super(VideoAdmin, self).get_changelist_form(request, **kwargs)

    def queryset(self, request):
        qs = super(VideoAdmin, self).queryset(request)
        return qs.filter(type='ondemand')

    def __init__(self, model, admin_site):
        super(VideoAdmin, self).__init__(model, admin_site)

admin.site.register(Video, VideoAdmin)
