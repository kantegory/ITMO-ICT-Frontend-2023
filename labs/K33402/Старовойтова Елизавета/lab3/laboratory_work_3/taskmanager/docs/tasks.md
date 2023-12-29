# Задачи

## API для задач

### Создание задачи

**Запрос:**

```http
POST /api/tasks/create/
Content-Type: application/json
{
  "category_name": "Life",
  "aim_title": "A trip to the mountains for skiing",
  "title": "Still alive",
  "description": "string",
  "deadline": "2023-12-17T22:38:10.488Z",
  "completed": "в работе",
  "category": 3,
  "aim": 2
}
```

**Ответ:**

```json
{
  "id": 14,
  "category_name": "Life",
  "aim_title": "A trip to the mountains for skiing",
  "title": "Still alive",
  "description": "string",
  "deadline": "2023-12-17T22:38:10.488000Z",
  "completed": "в работе",
  "category": 3,
  "aim": 2
}
```

### Получение информации о конкретной задаче

**Запрос:**

```http
GET /api/tasks/<int:pk>/
```

**Ответ:**
```json
{
  "id": 4,
  "aim": "Close Computer Networks",
  "category": "University",
  "title": "Make a lab4",
  "description": "Tasks in the telegram",
  "deadline": "2023-11-30T00:00:00Z",
  "completed": "завершена"
}
```

### Редактирование статуса задачи

**Запрос:**

```http
PUT /api/tasks/<int:task_id>/update-status/
Content-Type: application/json
{
  "completed": "в работе"
}

```

**Ответ:**
```json
{
  "completed": "в работе"
}

```

### Вывод всех задач, где цель не достигнута

**Запрос:**

```http
GET /api/tasks/uncompleted-aims/

```

**Ответ:**

```json
[
  {
    "id": 1,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab1",
    "description": "Tasks in the telegram",
    "deadline": "2023-09-22T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 2,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab2",
    "description": "Tasks in the telegram",
    "deadline": "2023-10-20T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 3,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab3",
    "description": "Tasks in the telegram",
    "deadline": "2023-11-17T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 4,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab4",
    "description": "Tasks in the telegram",
    "deadline": "2023-11-30T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 5,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab5",
    "description": "Tasks in the telegram",
    "deadline": "2023-12-22T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 6,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab6",
    "description": "Tasks in the telegram",
    "deadline": "2024-01-15T00:00:00Z",
    "completed": "запланирована",
    "category": 1,
    "aim": 1
  },
  {
    "id": 7,
    "category_name": "Life",
    "aim_title": "A trip to the mountains for skiing",
    "title": "Book a hotel",
    "description": "Book a hotel for 14 days",
    "deadline": "2023-12-10T00:00:00Z",
    "completed": "завершена",
    "category": 3,
    "aim": 2
  },
  {
    "id": 8,
    "category_name": "Life",
    "aim_title": "A trip to the mountains for skiing",
    "title": "Buy tickets for the plane",
    "description": "From Spb to Arkhyz",
    "deadline": "2023-12-15T00:00:00Z",
    "completed": "завершена",
    "category": 3,
    "aim": 2
  },
  {
    "id": 9,
    "category_name": "Life",
    "aim_title": "A trip to the mountains for skiing",
    "title": "Buy equipment",
    "description": "Everyone should buy more things that are missing",
    "deadline": "2024-01-20T00:00:00Z",
    "completed": "в работе",
    "category": 3,
    "aim": 2
  },
  {
    "id": 12,
    "category_name": "Life",
    "aim_title": "A trip to the mountains for skiing",
    "title": "Buy a helmet",
    "description": "Шлем для катания красивый",
    "deadline": "2023-12-31T13:47:51.182000Z",
    "completed": "завершена",
    "category": 3,
    "aim": 2
  },
  {
    "id": 14,
    "category_name": "Life",
    "aim_title": "A trip to the mountains for skiing",
    "title": "Still alive",
    "description": "string",
    "deadline": "2023-12-17T22:38:10.488000Z",
    "completed": "в работе",
    "category": 3,
    "aim": 2
  }
]
```

### Отображение списка задач по выбранной категории

**Запрос:**

```http
GET /api/tasks/by-category/<str:category_name>/

```

**Ответ:**

```json
[
  {
    "id": 1,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab1",
    "description": "Tasks in the telegram",
    "deadline": "2023-09-22T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 2,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab2",
    "description": "Tasks in the telegram",
    "deadline": "2023-10-20T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 3,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab3",
    "description": "Tasks in the telegram",
    "deadline": "2023-11-17T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 4,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab4",
    "description": "Tasks in the telegram",
    "deadline": "2023-11-30T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 5,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab5",
    "description": "Tasks in the telegram",
    "deadline": "2023-12-22T00:00:00Z",
    "completed": "завершена",
    "category": 1,
    "aim": 1
  },
  {
    "id": 6,
    "category_name": "University",
    "aim_title": "Close Computer Networks",
    "title": "Make a lab6",
    "description": "Tasks in the telegram",
    "deadline": "2024-01-15T00:00:00Z",
    "completed": "запланирована",
    "category": 1,
    "aim": 1
  }
]
```
