from django.db import models

# Create your models here.
from channels.models import Channel


class QualityControlChannel(Channel):

    class Meta:
        proxy = True
