from django.urls import path, include
from idealist_app.views import idea_list
urlpatterns = [
    path('list/', idea_list),
]
