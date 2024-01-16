from rest_framework import serializers
from .models import CustomUser, Task, Comment, Aim, Category, TaskUserRelation
from djoser.serializers import UserCreateSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ('password',)
        ref_name = 'UserSerializer'


class TaskUserRelationSerializer(serializers.ModelSerializer):
    task_title = serializers.ReadOnlyField(source='task.title', required=False)
    user_name = serializers.ReadOnlyField(source='user.username', required=False)
    class Meta:
        model = TaskUserRelation
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    task_user_relation = TaskUserRelationSerializer(required=False)
    user_name = serializers.ReadOnlyField(source='user.username', required=False)
    task_title = serializers.ReadOnlyField(source='task_user_relation.task.title', required=False)

    class Meta:
        model = Comment
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', required=False)
    aim_title = serializers.CharField(source='aim.title', required=False)

    class Meta:
        model = Task
        fields = '__all__'


class TaskUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['completed']

class AimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aim
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class TaskDetailSerializer(serializers.ModelSerializer):
    aim = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = ['id', 'aim', 'category', 'title', 'description', 'deadline', 'completed']

    def get_aim(self, obj):
        return obj.aim.title if obj.aim else None

    def get_category(self, obj):
        return obj.category.name if obj.category else None



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aim
        fields = '__all__'


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = ('username', 'password',)

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
