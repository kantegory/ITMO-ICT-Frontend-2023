# Пользователи

## API для пользователей

### Вывод всех пользователей

**Запрос:**

```http
GET /api/users/
```

**Ответ:**

```json
[
  {
    "id": 4,
    "username": "Lizaveta",
    "email": "liza@example.com",
    "password": "likast1233",
    "related_tasks": [
      1,
      2,
      3,
      4,
      5,
      6,
      9,
      10
    ]
  },
  {
    "id": 5,
    "username": "Ekaterina",
    "email": "katya@mail.com",
    "password": "stars1233",
    "related_tasks": [
      7,
      9,
      5,
      4
    ]
  },
  {
    "id": 6,
    "username": "Nikita",
    "email": "nikita@gmail.com",
    "password": "korotki90",
    "related_tasks": [
      8,
      9,
      11
    ]
  }
]

```

### Получение информации о назначенных пользователю задачах

**Запрос:**

```http
GET /api/users/<int:user_id>/tasks/status/
```

**Ответ:**
```json
{
  "in_progress_tasks": [
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
    }
  ],
  "planned_tasks": [
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
  ],
  "completed_tasks": [
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
      "id": 10,
      "category_name": "Work",
      "aim_title": "Complete the tender 4 sites",
      "title": "Write a report",
      "description": "Tender 4 sites",
      "deadline": "2023-10-10T00:00:00Z",
      "completed": "завершена",
      "category": 2,
      "aim": 3
    }
  ]
}
```

### Регистрация пользователя

**Запрос:**

```http
POST /auth/users
Content-Type: application/json
{
  "email": "user@example.com",
  "username": "example",
  "password": "fire123"
}
```

**Ответ:**
```json
{
    "email": "user@example.com",
    "username": "example",
    "id": 2
}

```

### Авторизация пользователя

**Запрос:**

```http
POST auth/token/login/
{
    "username": "example",
    "password": "fire123"
}
```

**Ответ:**

```json
{
    "auth_token": "a273aa16b65d9ecb4e01d4ff71eccd7c0dd99462"
}
```

### Редактирование авторизованного пользователя

**Запрос:**

```http
PATCH /auth/users/me/
{
    "email": "userexample@example.com" 
}
```

**Ответ:**

```json
{
    "email": "userexample@example.com",
    "username": "example",
    "id": 2
}
```

### Выход пользователя из системы

**Запрос:**

```http
POST /auth/token/logout/
HEADERS:
Authorization: Token a273aa16b65d9ecb4e01d4ff71eccd7c0dd9946
```

**Ответ:**

```json

```
