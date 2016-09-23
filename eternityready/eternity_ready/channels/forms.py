'''
Created on Sep 20, 2016

@author: dave
'''
from django import forms
from django.utils.encoding import force_text
from django.utils.html import format_html, format_html_join


from categories.models import Category
from keywords.models import Keyword

from .fields import RATING_CHOICES
from .models import Channel


class HorizontalRadioRenderer(forms.RadioSelect.renderer):

    def render(self):
        return format_html('<ul>\n{0}\n</ul>',
                           format_html_join('\n', '<li style="display: inline-block; margin-right: 10px;">{0}</li>',
                                            [(force_text(w),) for w in self]
                                            ))

#<input type="text" id="text" name="text_name" style="width: 300px;" />


class ChannelForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(ChannelForm, self).__init__(*args, **kwargs)
        if 'channelNumber' in self.fields:
            self.fields['channelNumber'].required = False

        self.fields['rating'] = forms.ChoiceField(
            label='Select a rating', widget=forms.RadioSelect(renderer=HorizontalRadioRenderer), choices=RATING_CHOICES, required=False)

        if 'categoryIds' in self.fields:
            self.fields['categoryIds'].widget.choices = [(i.pk, i) for i in Category.objects.all()]
            if self.instance.pk:
                self.fields['categoryIds'].initial = self.instance.categoryIds

        if 'keywordIds' in self.fields:
            self.fields['keywordIds'].widget.choices = [(i.pk, i) for i in Keyword.objects.all()]
            if self.instance.pk:
                self.fields['keywordIds'].initial = self.instance.keywordIds

    class Meta:
        model = Channel
        exclude = ('categoryNames', 'keywordNames',)
