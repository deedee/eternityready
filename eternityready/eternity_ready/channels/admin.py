'''
Created on Sep 20, 2016

@author: dave
'''
from __future__ import unicode_literals

from django.contrib import admin
from django.db import models
from django.forms import TextInput, Textarea

from .forms import ChannelForm
from .models import Channel


def categories(instance):
    return ', '.join(instance.categoryNames)


def mark_fixed(modeladmin, request, queryset):
    queryset.update(fix=False, disabled=False)
mark_fixed.short_description = "Mark selected as fixed"


class ChannelAdmin(admin.ModelAdmin):
    actions = [mark_fixed]
    form = ChannelForm
    list_display = ['title', 'channelNumber', categories, 'disabled', 'fix', 'comment']

    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 4, 'cols': 400})},
    }

    readonly_fields = ('slug', 'image_tag')

    fieldsets = [
        (None,
         {
             'fields': ('channelNumber', ('title', 'slug'), 'age',)}
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
             'fields': (('picture', 'image_tag'), )}
         ),
        ('Categories',
         {
             'classes': ('full-width',),
             'fields': ('categoryIds',)}
         ),

    ]

    search_fields = ('title',)

    def get_changelist_form(self, request, **kwargs):
        kwargs.setdefault('form', ChannelForm)
        return super(ChannelAdmin, self).get_changelist_form(request, **kwargs)

    def queryset(self, request):
        qs = super(ChannelAdmin, self).queryset(request)
        return qs.filter(type='channel')

    def __init__(self, model, admin_site):
        super(ChannelAdmin, self).__init__(model, admin_site)

admin.site.register(Channel, ChannelAdmin)
