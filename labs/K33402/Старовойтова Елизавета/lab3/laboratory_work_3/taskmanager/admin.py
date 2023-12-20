from django.contrib import admin
from .models import CustomUser, TaskUserRelation, Task, Category, Aim, Comment
from django.contrib.auth.admin import UserAdmin


# class UserAdmin(admin.ModelAdmin):
#     list_display = ('id', 'username', 'email')
class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('email',)}),
        ('Important dates', {'fields': ('last_login',)}),
    )
    list_display = ("id", "username",)
    list_display_links = ("id", "username",)
    search_fields = ("username",)

    list_filter = ('email',)

    add_fieldsets = (
        ("User Details", {'fields': ('username', 'email', 'password1', 'password2')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)


@admin.register(TaskUserRelation)
class TaskUserRelationAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'task')


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'completed', 'category', 'aim', 'deadline')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Aim)
class AimAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'status', 'date_start', 'date_end')


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'task_user_relation')

