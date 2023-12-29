from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# class User(AbstractUser):
#     username = models.CharField(max_length=255, unique=True)
#     email = models.EmailField(unique=True)

#     objects = UserManager

#     # Многие ко многим для связи с задачами через TaskUserRelation
#     related_tasks = models.ManyToManyField('Task', through='TaskUserRelation', related_name='users')

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email=None, password=None):
        user = self.model(
            username=username,
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(
            username,
            password=password,
        )

        user.is_admin = True
        user.save(using=self._db)

        return user


class CustomUser(PermissionsMixin, AbstractBaseUser):
    username = models.CharField("Логин пользователя", max_length=255, unique=True, null=True)

    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        null = True,
    )

    is_active = models.BooleanField(default=True,null=True)

    is_admin = models.BooleanField(default=False,null=True)

    is_superuser = models.BooleanField(default=False)

    related_tasks = models.ManyToManyField('Task', through='TaskUserRelation', related_name='users')

    objects = CustomUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class TaskUserRelation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    task = models.ForeignKey('Task', on_delete=models.CASCADE)


class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    deadline = models.DateTimeField()
    completed_choices = [
        ('в работе', 'В работе'),
        ('запланирована', 'Запланирована'),
        ('завершена', 'Завершена'),
    ]
    completed = models.CharField(max_length=20, choices=completed_choices)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    aim = models.ForeignKey('Aim', on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=255)


class Aim(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date_start = models.DateField()
    date_end = models.DateField()
    status_choices = [
        ('выполнена', 'Выполнена'),
        ('не выполнена', 'Не выполнена'),
    ]
    status = models.CharField(max_length=20, choices=status_choices)


class Comment(models.Model):
    text = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    task_user_relation = models.ForeignKey(TaskUserRelation, on_delete=models.CASCADE)
