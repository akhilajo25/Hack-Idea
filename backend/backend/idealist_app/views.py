from django.shortcuts import render
from idealist_app.models import Idea
from django.http import JsonResponse
# Create your views here.


def idea_list(request):
    ideas = Idea.objects.all()
    # return them in the form of JSON
    print(ideas)
    data = {'ideas': list(ideas.values())}
    return JsonResponse(data)
