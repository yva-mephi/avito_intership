# Avito Internship 2025 — Project Management System

Мини-система управления проектами, разработанная как тестовое задание для стажировки Avito (Frontend, весна 2025).

[Задание (GitHub)](https://github.com/avito-tech/tech-internship/tree/main/Tech%20Internships/Frontend/Frontend-trainee-assignment-spring-2025)

## Возможности

- Просмотр всех задач с фильтрами и поиском
- Просмотр всех досок
- Просмотр задач на конкретной доске (разделение по статусам)
- Создание и редактирование задач через модальные окна
- Переход из задачи на соответствующую доску

## Используемые технологии

- **React**
- **TypeScript**
- **React Router** — роутинг
- **Material UI** — UI-компоненты
- **Axios** — для HTTP-запросов
- **Vite** - сборка проекта
- **Docker** - сборка проекта с сервером

## Страницы

- `/issues` — список всех задач
- `/boards` — список досок
- `/board/:id` — конкретная доска с задачами по статусам

## Установка и запуск

```bash
# Склонировать репозиторий
git clone git@github.com:yva-mephi/avito_intership.git
cd avito_intership

# Установить зависимости
bun i

# Запустить dev-сервер
bun start

# Запуст backend'а
cd server
make initial-start![image](https://github.com/user-attachments/assets/705fa719-1322-4bc4-9cb7-c78213441cfe)


# Запуск backend + frontend
docker-compose up --build
```
- Клиентская часть запускается на http://localhost:3000/
- Серверная часть запускатеся на http://localhost:8080/api/v1
- 
## Обоснование технологий

- **TypeScript** — строгая типизация ускоряет разработку и уменьшает баги.
- **Material UI** — быстрое прототипирование и стильный внешний вид без необходимости писать CSS.
- **Axios** — удобный и компактный инструмент для работы с API.
- **Vite** - оптимален для разработки на React + TypeScript и обеспечивает мгновенный отклик
- **Docker** - обеспечивает кроссплатформенность и быстрый старт
- **ESLint** - выявление багов, повышение качества кода
- **Prettier** - автоматическое форматирование кода, повышение читаемости

![image](https://github.com/user-attachments/assets/336f5556-45a0-479b-9cff-188b12b5362e)
![image](https://github.com/user-attachments/assets/019c5d65-b379-4102-89b8-3a41b3a188e4)

![image](https://github.com/user-attachments/assets/3c1ac0aa-154b-4f9b-8899-3b798375f9df)
