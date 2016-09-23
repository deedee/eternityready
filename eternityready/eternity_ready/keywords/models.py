from django.db import models

# Create your models here.


class Keyword(models.Model):
    name = models.CharField(max_length=255)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.__unicode__()

    class Meta:
        db_table = "keywords"
        verbose_name_plural = "keywords"


from channels.models import Channel


class Videos(Channel):

    class Meta:
        proxy = True
        verbose_name_plural = "videos"
