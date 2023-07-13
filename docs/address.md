# ADRESS API SPEC

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses
Headers:
-Authorization : token

Request Body :

```json
{
  "street": "Jalan Sudirman",
  "city": "Jakarta Pusat",
  "country": "Indonesia",
  "postal_code": "27202"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Sudirman",
    "city": "Jakarta Pusat",
    "country": "Indonesia",
    "postal_code": "27202"
  }
}
```

Response Body Error:

```json
{
  "errors": "Country is mandatory"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId
Headers:
-Authorization : token

Request Body :

```json
{
  "street": "Jalan Sudirman",
  "city": "Jakarta Pusat",
  "country": "Indonesia",
  "postal_code": "27202"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Sudirman",
    "city": "Jakarta Pusat",
    "country": "Indonesia",
    "postal_code": "27202"
  }
}
```

Response Body Error:

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId
Headers:
-Authorization : token

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Sudirman",
    "city": "Jakarta Pusat",
    "country": "Indonesia",
    "postal_code": "27202"
  }
}
```

Response Body Error:

```json
{
  "errors": "Country is required"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses
Headers:
-Authorization : token

Response Body Success:

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Sudirman",
      "city": "Jakarta Pusat",
      "country": "Indonesia",
      "postal_code": "27202"
    },
    {
      "id": 2,
      "street": "Jalan Padjajaran",
      "city": "Bogor Kota",
      "country": "Indonesia",
      "postal_code": "23435"
    }
  ]
}
```

Response Body Error:

```json
{
  "errors": "Country is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId
Headers:
-Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "address not found"
}
```
