from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from idealist_app.models import Idea
from idealist_app.api.serializers import IdeaSerializer


@api_view(['GET', 'POST'])
def idea_list(request):
    if request.method == 'GET':
        ideas = Idea.objects.all()
        print(ideas)
        serializer = IdeaSerializer(ideas, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = IdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def idea_details(request, pk):
    if request.method == 'GET':
        idea = Idea.objects.get(pk=pk)
        serializer = IdeaSerializer(idea)
        return Response(serializer.data)

    if request.method == 'PUT':
        idea = Idea.objects.get(pk=pk)
        # Incase of PUT, all fields are updated, and Incase of patch only one field can be updated
        serializer = IdeaSerializer(idea, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    if request.method == 'DELETE':
        # select the right idea and delete
        idea = Idea.objects.get(pk=pk)
        idea.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
