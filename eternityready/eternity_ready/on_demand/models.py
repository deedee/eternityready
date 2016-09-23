from django import forms
from django.db import models
from django.template.defaultfilters import slugify
from djangotoolbox.fields import ListField

from categories.models import Category
from keywords.models import Keyword

from .fields import ModelListField, RATING_CHOICES


# Create your models here.
class CategoryField(ListField):

    def formfield(self, **kwargs):
        return forms.ModelMultipleChoiceField(Category.objects.all(), widget=forms.CheckboxSelectMultiple, ** kwargs)


class OnDemandManager(models.Manager):

    def get_queryset(self):
        return super(OnDemandManager, self).get_queryset().filter(type='ondemand')


class Video(models.Model):
    """
    "uniqueId" : "af854b8bd",
    "channelNumber" : "6",
    "title" : "Eternity Ready Movie Channel",
    "slug" : "eternity-ready-movie-channel",
    "description" : "<p>This channel is owned and endorsed by Eternity Ready Ministries. The Eternity Ready Movie Channel is a Registered Trademark of Eternity Ready Ministries. All Programming content herein are not owned by Eternity Ready Ministries except for Content produced locally by the Eternity Ready Media Productions. Most Programming are property of various Television &amp; Media Production Companies. You can visit the owner of this channel @ <a>http://www.eternityready.com</a></p>\r\n<p>&nbsp;</p>",
    "thumb" : "http://www.eternityready.tv/uploads/thumbs/af854b8bd-1.jpg",
    "categoryIds" : [
        ObjectId("57e052c18c1f145f87ce5208"),
        ObjectId("57e052c18c1f145f87ce5210")
    ],
    "categoryNames" : [
        "Movies & Music",
        "Premium Channels"
    ],
    "imageURL" : ""
    """
    uniqueId = models.CharField(max_length=9, null=True, blank=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    description = models.TextField()
    keywords1 = models.CharField(max_length=255, blank=True, null=True)
    keywords2 = models.CharField(max_length=255, blank=True, null=True)
    keywords3 = models.CharField(max_length=255, blank=True, null=True)
    keywords4 = models.CharField(max_length=255, blank=True, null=True)
    keywords5 = models.CharField(max_length=255, blank=True, null=True)
    keywords6 = models.CharField(max_length=255, blank=True, null=True)
    keywords7 = models.CharField(max_length=255, blank=True, null=True)
    keywords8 = models.CharField(max_length=255, blank=True, null=True)
    keywords9 = models.CharField(max_length=255, blank=True, null=True)
    keywords10 = models.CharField(max_length=255, blank=True, null=True)
    keywords11 = models.CharField(max_length=255, blank=True, null=True)
    keywords12 = models.CharField(max_length=255, blank=True, null=True)
    keywords13 = models.CharField(max_length=255, blank=True, null=True)
    keywords14 = models.CharField(max_length=255, blank=True, null=True)
    keywords15 = models.CharField(max_length=255, blank=True, null=True)
    keywords16 = models.CharField(max_length=255, blank=True, null=True)
    keywords17 = models.CharField(max_length=255, blank=True, null=True)
    keywords18 = models.CharField(max_length=255, blank=True, null=True)
    keywords19 = models.CharField(max_length=255, blank=True, null=True)
    keywords20 = models.CharField(max_length=255, blank=True, null=True)
    embedCode = models.TextField()
    video = models.FileField(upload_to='videos', null=True, blank=True)
    thumb = models.CharField(max_length=255, null=True, blank=True)
    rating = models.CharField(max_length=1, choices=RATING_CHOICES, default=None, null=True, blank=True)
    age = models.CharField(max_length=9, null=True, blank=True)
    categoryIds = ModelListField(models.ForeignKey(Category), verbose_name="Categories")

    categoryNames = ListField()

    keywordIds = ModelListField(models.ForeignKey(Keyword), verbose_name="Keywords")
    keywordNames = ListField()
    picture = models.FileField(upload_to='thumbs')
    disabled = models.BooleanField(default=False)
    fix = models.BooleanField(default=False)
    comment = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)

    def image_tag(self):
        return u'<img src="/uploads/%s" />' % self.picture

    image_tag.short_description = 'Image'
    image_tag.allow_tags = True

    def save(self, *args, **kwargs):
        self.type = "ondemand"
        try:
            self.channelNumber = int(self.channelNumber)
        except:
            pass

        try:
            self.age = int(self.age)
        except:
            pass

        self.slug = slugify(self.title)
        cats = Category.objects.filter(pk__in=self.categoryIds)
        self.categoryNames = [cat.name for cat in cats]

        self.keywordNames = [self.keywords1, self.keywords2, self.keywords3, self.keywords4, self.keywords5, self.keywords6, self.keywords7, self.keywords8, self.keywords9,
                             self.keywords10, self.keywords11, self.keywords12, self.keywords13, self.keywords14, self.keywords15, self.keywords16, self.keywords17, self.keywords18, self.keywords19, self.keywords20]
        super(Video, self).save(*args, **kwargs)

    objects = OnDemandManager()

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.__unicode__()

    class Meta:
        ordering = ['title']
        db_table = "channels"


class QualityControlReviewChannel(Video):

    class Meta:
        proxy = True
