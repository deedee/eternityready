'''
Created on Sep 20, 2016

@author: dave
'''
from django import forms
from django.utils.encoding import force_text
from django.utils.html import format_html, format_html_join

from categories.models import Category
from channels.forms import ChannelForm
from keywords.models import Keyword

from .fields import RATING_CHOICES
from .models import Video


class HorizontalRadioRenderer(forms.RadioSelect.renderer):

    def render(self):
        return format_html('<ul>\n{0}\n</ul>',
                           format_html_join('\n', '<li style="display: inline-block; margin-right: 10px;">{0}</li>',
                                            [(force_text(w),) for w in self]
                                            ))


class VideoForm(ChannelForm):

    class Meta:
        model = Video
        exclude = ('categoryNames', 'keywordNames',)
