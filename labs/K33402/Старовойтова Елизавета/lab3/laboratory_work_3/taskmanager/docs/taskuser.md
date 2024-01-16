# Назначение задач пользователям

## API для назначения задач

### Вывод всех назначений

**Запрос:**

```http
GET /api/assign-task-to-user/
```

**Ответ:**

```json
[
  {
    "id": 1,
    "task_title": "Make a lab1",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 1
  },
  {
    "id": 2,
    "task_title": "Make a lab2",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 2
  },
  {
    "id": 3,
    "task_title": "Make a lab3",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 3
  },
  {
    "id": 4,
    "task_title": "Make a lab4",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 4
  },
  {
    "id": 5,
    "task_title": "Make a lab5",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 5
  },
  {
    "id": 6,
    "task_title": "Make a lab6",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 6
  },
  {
    "id": 7,
    "task_title": "Buy equipment",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 9
  },
  {
    "id": 8,
    "task_title": "Write a report",
    "user_name": "Lizaveta",
    "user": 4,
    "task": 10
  },
  {
    "id": 9,
    "task_title": "Book a hotel",
    "user_name": "Ekaterina",
    "user": 5,
    "task": 7
  },
  {
    "id": 10,
    "task_title": "Buy equipment",
    "user_name": "Ekaterina",
    "user": 5,
    "task": 9
  }
]

```

### Назначить задачу пользователю

**Запрос:**

```http
POST /api/assign-task-to-user/
{
  "user": 5,
  "task": 1
}
```

**Ответ:**
```json
{
  "id": 17,
  "task_title": "Make a lab1",
  "user_name": "Ekaterina",
  "user": 5,
  "task": 1
}
```
