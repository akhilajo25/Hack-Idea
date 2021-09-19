from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from django_filters import rest_framework as filters
# FUNCTION BASED VIEWS api_view
# from rest_framework.decorators import api_view

# CLASSBASED VIEWS
from rest_framework.views import APIView
from idealist_app.models import Idea, Tag, Employee, Idea_vote
from idealist_app.api.serializers import IdeaSerializer, TagSerializer, EmployeeSerializer, Idea_voteSerializer


class VoteList(APIView):
    def get(self, request):
        vote = Idea_vote.objects.all()
        serializer = Idea_voteSerializer(vote, many=True)
        print(type(serializer.data))
        print(serializer.data)
        return Response(serializer.data)

    def post(self, request):
        # print(request.data['idea'])
        serializer = Idea_voteSerializer(data=request.data)
        try:
            e = Idea_vote.objects.get(
                idea=request.data['idea'], user=request.data['user'])
            print("True")
            return Response({'message': 'Vote Exists'})
        except Idea_vote.DoesNotExist:
            print("except")
            if serializer.is_valid():
                serializer.save()
                print("serializer.data")
                return Response(serializer.data)


class EmployeeList(APIView):
    def get(self, request):
        employee = Employee.objects.all()
        serializer = EmployeeSerializer(employee, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request.data['employee_id'])
        serializer = EmployeeSerializer(data=request.data)
        try:
            e = Employee.objects.get(employee_id=request.data['employee_id'])
            print("True")
            if serializer.is_valid():
                return Response(serializer.data)
        except Employee.DoesNotExist:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)


class TagList(APIView):
    def get(self, request):
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data)


# CLASS BASED VIEWS
class IdeaListAV(APIView):
    # queryset = Idea.objects.all().order_by('-created')
    # serializer_class = IdeaSerializer
    # filter_backends = [filters.DjangoFilterBackend]
    # ordering_fields = ['created', 'votes']

    # # def get_queryset(self):
    # #     pk = self.kwargs['pk']
    # #     return Idea.objects.filter(pk=pk)
    def get(self, request):
        order = request.GET.get('order', 'desc')
        print(order)
        ideas = Idea.objects.all()
        if(order == 'desc'):
            ideas = ideas.order_by('-created')

        if(order == 'asc'):
            ideas = ideas.order_by('created')

        if(order == 'vasc'):
            ideas = ideas.order_by('votes')
        if(order == 'vdesc'):
            ideas = ideas.order_by('-votes')
        serializer = IdeaSerializer(ideas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = IdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            # return Response(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class IdeaDetailAV(APIView):
    def get(self, request, pk):
        idea = Idea.objects.get(pk=pk)
        serializer = IdeaSerializer(idea)
        return Response(serializer.data)

    # def put(self, request, pk):
    #     idea = Idea.objects.get(pk=pk)
    #     serializer = IdeaSerializer(idea, request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     else:
    #         return Response(serializer.errors)

    def patch(self, request, pk):
        idea = Idea.objects.get(pk=pk)
        data = {"votes": idea.votes + 1}
        serializer = IdeaSerializer(idea, data=data, partial=True)
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
