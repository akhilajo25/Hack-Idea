from rest_framework.response import Response
from rest_framework import status
# FUNCTION BASED VIEWS api_view
# from rest_framework.decorators import api_view

# CLASSBASED VIEWS
from rest_framework.views import APIView
from idealist_app.models import Idea, Tag
from idealist_app.api.serializers import IdeaSerializer, TagSerializer


class TagList(APIView):
    def get(self, request):
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data)


# CLASS BASED VIEWS
class IdeaListAV(APIView):
    def get(self, request):
        ideas = Idea.objects.all()
        serializer = IdeaSerializer(ideas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = IdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class IdeaDetailAV(APIView):
    def get(self, request, pk):
        idea = Idea.objects.get(pk=pk)
        serializer = IdeaSerializer(idea)
        return Response(serializer.data)

    def put(self, request, pk):
        idea = Idea.objects.get(pk=pk)
        serializer = IdeaSerializer(idea, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request, pk):
        idea = Idea.objects.get(pk=pk)
        idea.delete()
        return Response({'Error': 'Not Found'}, status=status.HTTP_204_NO_CONTENT)

        # @api_view(['GET', 'POST'])
        # def idea_list(request):
        #     if request.method == 'GET':
        #         ideas = Idea.objects.all()
        #         print(ideas)
        #         serializer = IdeaSerializer(ideas, many=True)
        #         return Response(serializer.data)

        #     if request.method == 'POST':
        #         serializer = IdeaSerializer(data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return Response(serializer.data)
        #         else:
        #             return Response(serializer.errors)

        # @api_view(['GET', 'PUT', 'DELETE'])
        # def idea_details(request, pk):
        #     if request.method == 'GET':
        #         try:
        #             idea = Idea.objects.get(pk=pk)
        #         except Idea.DoesNotExist:
        #             return Response({'Error': 'Idea Not found'}, status=status.HTTP_404_NOT_FOUND)
        #         serializer = IdeaSerializer(idea)
        #         return Response(serializer.data)

        #     if request.method == 'PUT':
        #         idea = Idea.objects.get(pk=pk)
        #         # Incase of PUT, all fields are updated, and Incase of patch only one field can be updated
        #         serializer = IdeaSerializer(idea, data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return Response(serializer.data)
        #         else:
        #             return Response(serializer.errors)
        #     if request.method == 'DELETE':
        #         # select the right idea and delete
        #         idea = Idea.objects.get(pk=pk)
        #         idea.delete()
        #         return Response(status=status.HTTP_204_NO_CONTENT)
