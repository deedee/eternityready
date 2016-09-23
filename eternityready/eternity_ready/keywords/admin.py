'''
Created on Sep 20, 2016

@author: dave
'''
from __future__ import unicode_literals

from django.contrib import admin
from django.db import models
from django.forms import TextInput
from channels.forms import ChannelForm

from .models import Videos, Keyword


class KeywordAdmin(admin.ModelAdmin):
    model = Keyword

#admin.site.register(Keyword, KeywordAdmin)


class VideoAdmin(admin.ModelAdmin):
    form = ChannelForm
    list_display = ['title', 'keywords1', 'keywords2', 'keywords3', 'keywords4', 'keywords5', 'keywords6', 'keywords7', 'keywords8', 'keywords9',
                    'keywords10', 'keywords11', 'keywords12', 'keywords13', 'keywords14', 'keywords15', 'keywords16', 'keywords17', 'keywords18', 'keywords19', 'keywords20']
    list_display_links = ('title',)
    list_editable = ['keywords1', 'keywords2', 'keywords3', 'keywords4', 'keywords5', 'keywords6', 'keywords7', 'keywords8', 'keywords9',
                     'keywords10', 'keywords11', 'keywords12', 'keywords13', 'keywords14', 'keywords15', 'keywords16', 'keywords17', 'keywords18', 'keywords19', 'keywords20']
    list_per_page = 40

    def get_changelist_form(self, request, **kwargs):
        kwargs.setdefault('form', ChannelForm)
        return super(VideoAdmin, self).get_changelist_form(request, **kwargs)

    readonly_fields = ('slug', )

    fieldsets = [
        (None,
         {
             'fields': ('embedCode',)}
         ),
        ('Fix',
         {
             'fields': ('fix', 'comment')}
         ),

    ]
    readonly_fields = ('embedCode',)
    search_fields = ('title',)

    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size': '5'})},

    }

    def __init__(self, model, admin_site):
        super(VideoAdmin, self).__init__(model, admin_site)

#create_modeladmin(QAAdmin, name=str("quality_control-channel"), model=QAChannel)
admin.site.register(Videos, VideoAdmin)
