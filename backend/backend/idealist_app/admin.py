from django.contrib import admin
from idealist_app.models import Idea, Tag, Employee, Idea_vote
# Register your models here.

admin.site.register(Idea)
admin.site.register(Tag)
admin.site.register(Employee)
admin.site.register(Idea_vote)
