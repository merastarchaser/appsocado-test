
# User Microservice

El microservicio user cuenta con dos endpoints principales:

create-user: Este endpoint crea un usuario en la base de datos.
authenticate: Valida la existencia del usuario en la base de datos y devuelve información del usuario junto con un token de autenticación.
Se utilizó base de datos en memoria SQLite, para almacenar la información de los usuarios.

Funcionalidades:
create-user: Crea un nuevo usuario en la base de datos.
authenticate: Valida la existencia del usuario en la base de datos y devuelve información del usuario junto con un token de autenticación.




## API Reference

#### Authenticate user

```http
  POST localhost:3000/user/authenticate
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. username to authenticate |
| `password`      | `string` | **Required**. username password to authenticate |

```http
  RESPONSE: {"id": number, "name": string, "password": string, "token": string}
```

#### Create user

```http
  POST /localhost:3000/user/create-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. username for the new user |
| `password`      | `string` | **Required**. password for the new user |


## Installation

Install dependencies with npm

```bash
  cd user-microservice
  npm install
  npm run start
```
    
## Authors

- [@merastarchaser](https://github.com/merastarchaser)

