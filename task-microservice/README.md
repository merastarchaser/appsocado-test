
# Task Microservice

El microservicio task ofrece operaciones CRUD (Create, Read, Update, Delete) para tareas. Cada uno de sus endpoints requiere autenticación antes de ejecutarse.

Se utilizó base de datos en memoria SQLite para almacenar la información relacionada con las tareas.

Funcionalidades:
Operaciones CRUD para tareas. Se necesita autenticación para ejecutar cada uno de estos endpoints.




## API Reference

#### Get task

```http
  GET /localhost:3001/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |
| `token`      | `Bearer Token` | **Required**. user token previously generated |


#### Create task

```http
  POST /localhost:3001/task/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. title for the new task |
| `description`      | `string` | **Required**. new task description |
| `isCompleted`      | `boolean` | **Optional**. complete status |
| `token`      | `Bearer Token` | **Required**. user token previously generated |

#### Update task

```http
  PUT /localhost:3001/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Optional**. title for the task |
| `description`      | `string` | **Optional**. task description |
| `isCompleted`      | `boolean` | **Optional**. complete status |
| `token`      | `Bearer Token` | **Required**. user token previously generated |

#### Delete task

```http
  DELETE /localhost:3001/task/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of the task to fetch |
| `token`      | `Bearer Token` | **Required**. user token previously generated |

## Installation

Install dependencies with npm

```bash
  cd task-microservice
  npm install
  npm run start
```
    
## Authors

- [@merastarchaser](https://github.com/merastarchaser)

