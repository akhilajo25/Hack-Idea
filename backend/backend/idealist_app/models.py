from django.db import models

# Create your models here.


class Tag(models.Model):
    tag_name = models.CharField(max_length=30)

    def __str__(self):
        return self.tag_name


class Idea(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    tags = models.ManyToManyField(
        Tag, related_name="related_tags")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
