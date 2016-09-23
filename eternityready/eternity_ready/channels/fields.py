'''
Created on Sep 20, 2016

@author: dave
'''
from django import forms
from django.db import models
from djangotoolbox.fields import ListField


RATING_CHOICES = (
    (1, "1"),
    (2, "2"),
    (3, "3"),
    (4, "4"),
    (5, "5"),
)


class ModelListField(ListField):

    def formfield(self, **kwargs):
        return FormListField(**kwargs)


class ListFieldWidget(forms.widgets.CheckboxSelectMultiple):
    pass


class FormListField(forms.fields.MultipleChoiceField):
    """
    This is a custom form field that can display a ModelListField as a Multiple Select GUI element.
    """
    widget = ListFieldWidget

    def clean(self, value):
        # TODO: clean your data in whatever way is correct in your case and return
        # cleaned data instead of just the value
        return value
