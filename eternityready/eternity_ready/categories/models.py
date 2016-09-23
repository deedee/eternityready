from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.__unicode__()

    class Meta:
        db_table = "categories"
        verbose_name_plural = "categories"
