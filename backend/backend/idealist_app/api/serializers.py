from rest_framework import serializers
# Map each value step by step from model
from idealist_app.models import Idea


class IdeaSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()

    def create(self, validated_data):
        return Idea.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # instance is old data
        # validated data is new data
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.save()
        return instance
