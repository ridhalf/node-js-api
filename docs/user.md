# User API Spec

## Register User API

Endpoint: POST /api/users
Request Body :

```json
{
  "username": "ridhal",
  "password": "password",
  "name": "ridhal fajri"
}
```

Respose Body success:

```json
{
  "data": {
    "username": "ridhal",
    "name": "ridhal fajri"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "ridhal",
  "password": "password"
}
```

Response Body :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current
Headers :

- Authorization : token
  Request Body :

```json
{
  "name": "tom riddle",
  "password": "new password"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "ridhal",
    "name": "tom riddle"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current
Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": {
    "username": "ridhal",
    "name": "tom riddle"
  }
}
```

Response Body Error:

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint: DELETE /api/users/logout
Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Errors :

```json
{
  "errors": "Unauthorized"
}
```
