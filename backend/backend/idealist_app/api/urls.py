from django.urls import path, include
from idealist_app.api.views import idea_list, idea_details

urlpatterns = [
    path('list/', idea_list, name='idea_list'),
    path('<int:pk>', idea_details, name='idea_detail'),
]
