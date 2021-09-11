from rest_framework import serializers
# Map each value step by step from model
from idealist_app.models import Idea, Tag


class IdeaSerializer(serializers.ModelSerializer):
    # tags = serializers.StringRelatedField(many=True)
    class TagsField(serializers.CharField):

        def to_representation(self, tags):
            tags = tags.all()
            return "".join([(tag.tag_name + " ") for tag in tags]).rstrip(' ')

    tags = TagsField()

    class Meta:
        model = Idea
        fields = '__all__'
        # exclude =['description']

    def create(self, validated_data):

        tags = validated_data.pop('tags')  # Removes the 'tags' entry
        tag_list = []
        for tag in tags.split(' '):
            tag_instance, created = Tag.objects.get_or_create(tag_name=tag)
            tag_list += [tag_instance]

        article = Idea.objects.create(**validated_data)
        print(tag_list)
        article.tags.set(tag_list)
        article.save()
        return article

    # FILED LEVEL VALIDATION

    def validate_title(self, value):
        if len(value) < 2:
            raise serializers.ValidationError("Title too short")
        else:
            return value

    # OBJECT LEVEL VALIDATION, takes self and data as args
    def validate(self, data):
        if data['title'] == data['description']:
            raise serializers.ValidationError(
                "Title can't be same as description")
        else:
            return data


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

# def name_length(value):
#     if len(value) < 2:
#         raise serializers.ValidationError("Title too short")
#     return value


# class IdeaSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(validators=[name_length])
#     description = serializers.CharField()

#     def create(self, validated_data):
#         return Idea.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         # instance is old data
#         # validated data is new data
#         instance.title = validated_data.get('title', instance.title)
#         instance.description = validated_data.get(
#             'description', instance.description)
#         instance.save()
#         return instance

    # FILED LEVEL VALIDATION
    # def validate_title(self, value):
    #     if len(value) < 2:
    #         raise serializers.ValidationError("Title too short")
    #     else:
    #         return value

    # OBJECT LEVEL VALIDATION, takes self and data as args
    # def validate(self, data):
    #     if data['title'] == data['description']:
    #         raise serializers.ValidationError(
    #             "Title can't be same as description")
    #     else:
    #         return data
