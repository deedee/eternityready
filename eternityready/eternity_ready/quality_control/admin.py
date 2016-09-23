'''
Created on Sep 21, 2016

@author: dave
'''
from __future__ import unicode_literals

from django.contrib import admin
from django.utils.safestring import mark_safe

from channels.forms import ChannelForm

from .models import QualityControlChannel


def video_link(instance):
    return mark_safe('<a href="/channel/%s" target="_blank">check video</a>' % instance.slug)


class QualityControlAdmin(admin.ModelAdmin):
    form = ChannelForm
    list_display = ['channelNumber', 'title', 'fix', 'disabled',  'comment', video_link]
    list_display_links = ('channelNumber', 'title')
    list_editable = ['fix', 'comment', 'disabled']
    list_per_page = 40

    def get_changelist_form(self, request, **kwargs):
        kwargs.setdefault('form', ChannelForm)
        return super(QualityControlAdmin, self).get_changelist_form(request, **kwargs)

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

    def __init__(self, model, admin_site):
        super(QualityControlAdmin, self).__init__(model, admin_site)

#create_modeladmin(QAAdmin, name=str("quality_control-channel"), model=QAChannel)
admin.site.register(QualityControlChannel, QualityControlAdmin)
