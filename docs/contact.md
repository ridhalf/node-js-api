#CONTACT API SPEC

## Create Contact API

Endpoint : POST /api/contacts
Header :

- Authorization : token

Request body:

```json
{
  "first_name": "Ridhal",
  "last_name": "Fajri",
  "email": "ridhal@gmail.com",
  "phone": "082285497645"
}
```

Response body succes:

```json
{
  "data": {
    "id": 1,
    "first_name": "Ridhal",
    "last_name": "Fajri",
    "email": "ridhal@gmail.com",
    "phone": "082285497645"
  }
}
```

Response body error:

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id
Header :

- Authorization : token

Request body:

```json
{
  "first_name": "Ridhal",
  "last_name": "Fajri",
  "email": "ridhal@gmail.com",
  "phone": "082285497645"
}
```

Response body succes:

```json
{
  "data": {
    "id": 1,
    "first_name": "Ridhal",
    "last_name": "Fajri",
    "email": "ridhal@gmail.com",
    "phone": "082285497645"
  }
}
```

Response body error:

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id
Header :

- Authorization : token

Response body succes:

```json
{
  "data": {
    "id": 1,
    "first_name": "Ridhal",
    "last_name": "Fajri",
    "email": "ridhal@gmail.com",
    "phone": "082285497645"
  }
}
```

Response body error:

```json
{
  "errors": "Contact not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts
Header :

- Authorization : token

Query params:

- name : Search by first_name or last_name, using, optional
- email : Search by first_name or last_name, using, optional
- phone : Search by first_name or last_name, using, optional
- page : number of page, default 1
- size : size per page, default 10

Response body succes:

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Ridhal",
      "last_name": "Fajri",
      "email": "ridhal@gmail.com",
      "phone": "082285497645"
    },
    {
      "id": 1,
      "first_name": "Pandeka",
      "last_name": "Setan",
      "email": "pandeka@gmail.com",
      "phone": "08238923282"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item ": 30
  }
}
```

Response body error:

## Remove Contact API

Endpoint : DELETE /api/contacts/:id
Header :

- Authorization : token

Response body succes:

```json
{
  "data": "OK"
}
```

Response body error:

```json
{
  "errors": "Contact is not found"
}
```
