from rest_framework import generics
from .models import CustomUser, Task, Comment, Aim, Category, TaskUserRelation
from .serializers import UserSerializer, TaskSerializer, CommentSerializer, TaskDetailSerializer, TaskUpdateSerializer, TaskUserRelationSerializer, CategorySerializer, AimSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import F
from django.shortcuts import get_object_or_404


class TaskByUncompletedAimView(generics.ListAPIView):
    """
    Выводит все задачи, где цель не достигнута
    """
    serializer_class = TaskSerializer

    def get_queryset(self):
        """
        Получает все задачи, у которых связанная цель имеет статус "не выполнена"

            :return: queryset задач
        """
        return Task.objects.filter(aim__status='не выполнена')

class UserTasksStatusView(APIView):
    """
    Выводит все задачи пользователя в различных статусах.
    """
    def get(self, request, user_id):
        """
        Получить задачи пользователя по разным статусам.

            :param user_id: Идентификатор пользователя.
            :return: Список задач пользователя в различных статусах.
        """
        try:
            user = CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        in_progress_tasks = Task.objects.filter(users=user, completed='в работе')
        planned_tasks = Task.objects.filter(users=user, completed='запланирована')
        completed_tasks = Task.objects.filter(users=user, completed='завершена')

        in_progress_serializer = TaskSerializer(in_progress_tasks, many=True)
        planned_serializer = TaskSerializer(planned_tasks, many=True)
        completed_serializer = TaskSerializer(completed_tasks, many=True)

        result = {
            "in_progress_tasks": in_progress_serializer.data,
            "planned_tasks": planned_serializer.data,
            "completed_tasks": completed_serializer.data,
        }

        return Response(result, status=status.HTTP_200_OK)


class TaskDetailView(generics.RetrieveAPIView):
    """
    Представление для просмотра одной задачи с информацией о цели, категории.
    """
    queryset = Task.objects.all()
    serializer_class = TaskDetailSerializer


class UserListView(generics.ListAPIView):
    """
    Представление для списка пользователей
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class TaskByCategoryListView(generics.ListAPIView):
    """
    Представление для списка задач по имени категории
    """
    serializer_class = TaskSerializer

    def get_queryset(self):
        # Получаем имя категории из параметра запроса
        category_name = self.kwargs.get('category_name', '')
        # Получаем все задачи, у которых связанная категория имеет указанное имя
        return Task.objects.filter(category__name=category_name)

class TaskUpdateStatusView(generics.UpdateAPIView):
    """
    Представление для редактирования статуса задачи
    """
    serializer_class = TaskUpdateSerializer
    lookup_url_kwarg = 'task_id'

    def get_queryset(self):
        task_id = self.kwargs.get(self.lookup_url_kwarg, '')

        try:
            task = Task.objects.get(id=task_id)
            return Task.objects.filter(id=task_id)
        except Task.DoesNotExist:
            return Task.objects.none()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if 'completed' in request.data:
            instance.completed = request.data['completed']
            instance.save()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)

        return Response({"error": "You can only update 'completed' field."},
                        status=status.HTTP_400_BAD_REQUEST)


class AssignTaskToUserView(generics.ListCreateAPIView):
    """
    Представление для назначения новой задачи пользователю и получения списка назначений.
    """
    serializer_class = TaskUserRelationSerializer

    def get_queryset(self):
        # Получаем список всех назначений
        return TaskUserRelation.objects.all()

    def perform_create(self, serializer):
        # Метод для создания нового назначения
        serializer.save()

    def create(self, request, *args, **kwargs):
        # Проверка наличия параметров task_id и user_id в запросе
        task_id = request.data.get('task')
        user_id = request.data.get('user')

        if not task_id or not user_id:
            return Response({"error": "Both task_id and user_id are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Проверка существования задачи и пользователя
        task_exists = Task.objects.filter(id=task_id).exists()
        user_exists = CustomUser.objects.filter(id=user_id).exists()

        if not task_exists or not user_exists:
            return Response({"error": "Invalid task_id or user_id"}, status=status.HTTP_400_BAD_REQUEST)

        # Проверка, что задача еще не назначена пользователю
        if TaskUserRelation.objects.filter(task=task_id, user=user_id).exists():
            return Response({"error": "Task is already assigned to the user"}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)


class CreateTaskView(generics.CreateAPIView):
    """
    Представление для создания новой задачи.
    """
    serializer_class = TaskSerializer

    def create(self, request, *args, **kwargs):
        # Проверка наличия параметров category_id и aim_id в запросе
        category_id = request.data.get('category')
        aim_id = request.data.get('aim')

        if not category_id or not aim_id:
            return Response({"error": "Both category_id and aim_id are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Проверка существования категории и цели
        category_exists = Category.objects.filter(id=category_id).exists()
        aim_exists = Aim.objects.filter(id=aim_id).exists()

        if not category_exists or not aim_exists:
            return Response({"error": "Invalid category_id or aim_id"}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)


class CreateCommentView(generics.CreateAPIView):
    """
    Представление для создания нового комментария.
    """
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        user_id = self.request.user.id

        task_user_relation = TaskUserRelation.objects.get(task__id=self.request.data.get("task"), user__id=user_id)

        serializer.save(user_id=user_id, task_user_relation=task_user_relation)
        return super().perform_create(serializer)

    # def create(self, request, *args, **kwargs):
    #     # Проверка наличия параметров text, user_id и task_user_relation_id в запросе
    #     text = request.data.get('text')
    #     user_id = request.user.id
    #     task_user_relation_id = request.data.get('task_user_relation')

    #     if not text or not user_id or not task_user_relation_id:
    #         return Response({"error": "text, user_id, and task_user_relation_id are required"}, status=status.HTTP_400_BAD_REQUEST)

    #     # Проверка существования пользователя и назначения задачи
    #     user_exists = User.objects.filter(id=user_id).exists()
    #     task_user_relation_exists = TaskUserRelation.objects.filter(id=task_user_relation_id).exists()

    #     if not user_exists or not task_user_relation_exists:
    #         return Response({"error": "Invalid user_id or task_user_relation_id"}, status=status.HTTP_400_BAD_REQUEST)

    #     return super().create(request, *args, **kwargs)


class DeleteCommentView(generics.DestroyAPIView):
    """
    Представление для удаления комментария.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_object(self):
        comment_id = self.kwargs['comment_id']
        return Comment.objects.get(id=comment_id)


class CommentListView(generics.ListAPIView):
    """
    Представление для отображения комментариев к каждому назначению задачи.
    """
    serializer_class = CommentSerializer

    def get_queryset(self):
        # Используем annotate для получения title из модели Task через связь TaskUserRelation
        queryset = Comment.objects.select_related('task_user_relation__task').annotate(task_title=F('task_user_relation__task__title'))

        return queryset


class CategoryListView(generics.ListAPIView):
    """
    Представление для отображения категорий задач.
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class AimListView(generics.ListAPIView):
    """
    Представление для отображения целей задач.
    """
    serializer_class = AimSerializer
    queryset = Aim.objects.all()


class TaskListView(generics.ListAPIView):
    """
    Представление для отображения всех задач.
    """
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class TaskUserView(generics.RetrieveAPIView):
    """
    Представление для отображения задач по привязке к пользователям.
    """
    serializer_class = TaskUserRelationSerializer
    queryset = TaskUserRelation.objects.all()
    lookup_field = "task_id"

    def retrieve(self, request, *args, **kwargs):
        obj = TaskUserRelation.objects.filter(
            task = self.kwargs.get("task_id")
        ).first()

        return Response(self.serializer_class(obj).data)


class TaskDeleteView(generics.DestroyAPIView):
    """
    Представление для удаления задачи.
    """
    serializer_class = Task
    queryset = Task.objects.all()


class CommentByTaskListView(generics.ListAPIView):
    """
    Представление для отображения комментариев к каждому назначению задачи.
    """
    serializer_class = CommentSerializer

    def get_queryset(self):
        # Используем annotate для получения title из модели Task через связь TaskUserRelation
        queryset = Comment.objects.filter(task_user_relation__task__id=self.kwargs.get("task_id")).select_related('task_user_relation__task').annotate(task_title=F('task_user_relation__task__title'))

        return queryset

class UserMeDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        user_id = request.user.id
        user = CustomUser.objects.get(pk=user_id)

        return Response(self.serializer_class(user).data)
