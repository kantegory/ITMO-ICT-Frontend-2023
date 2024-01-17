# Комментарии

## API для комментариев

### Создание нового комментария

**Запрос:**

```http
POST /api/create-comment/
{
  "text": "Тестовый комментарий",
  "user": 4,
  "task_user_relation": 3
}
```

**Ответ:**

```json
{
  "id": 5,
  "user_name": "Lizaveta",
  "task_title": "Make a lab3",
  "text": "Тестовый комментарий",
  "user": 4,
  "task_user_relation": 3
}
```

### Отображение комментариев к каждому назначению задачи c отображением пользователя и заголовка задачи

**Запрос:**

```http
GET /api/comment-list/

```

**Ответ:**

```json
[
  {
    "id": 1,
    "user_name": "Lizaveta",
    "task_title": "Make a lab1",
    "text": "Супер, задача понятна!!",
    "user": 4,
    "task_user_relation": 1
  },
  {
    "id": 3,
    "user_name": "Lizaveta",
    "task_title": "Write a report",
    "text": "Успеть все до НГ",
    "user": 4,
    "task_user_relation": 8
  },
  {
    "id": 4,
    "user_name": "Nikita",
    "task_title": "Buy tickets for the plane",
    "text": "Тестовый комент",
    "user": 6,
    "task_user_relation": 11
  }
]
```

### Удаление комментария

**Запрос:**

```http
DELETE /api/delete-comment/<int:comment_id>/
```
