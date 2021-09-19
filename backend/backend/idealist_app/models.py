from django.db import models

# Create your models here.


class Employee(models.Model):
    employee_id = models.CharField(max_length=10)

    def __str__(self):
        return self.employee_id


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
    createdby = models.CharField(max_length=50)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Idea_vote(models.Model):
    idea = models.ForeignKey(Idea, on_delete=models.CASCADE)
    user = models.ForeignKey(Employee, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.idea)
