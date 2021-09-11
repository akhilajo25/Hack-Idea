from django.urls import path, include
# from idealist_app.api.views import idea_list, idea_details
from idealist_app.api.views import IdeaListAV, IdeaDetailAV, TagList
urlpatterns = [
    path('list/', IdeaListAV.as_view(), name='idea_list'),
    path('<int:pk>', IdeaDetailAV.as_view(), name='idea_detail'),
    path('tags/', TagList.as_view(), name='tags_list'),
]
