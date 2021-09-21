# Crud App in Laravel Php with Token Login

This is starter code written in Laravel Php, Database is Mysql

Commands to run project:
  - `php artisan serve`

#### Lets look at APIs there URL, Request Header and Method, Response

##### Register
`POST` : `{{API_ENDPOINT}}/api/register`
```sh
Request Body
{
	"name": "bhagyesh",
	"email": "bhagyesh@gmail.com",
	"password": "vishnu",
	"c_password": "vishnu"
}
Success Reponse
{
    "success": {
        "token": "Bearer eyJ0eXAiOiJKV1QiLCJ===TOEKN",
        "name": "bhagyesh"
    }
}
Error Response
{
}
```

##### Login
`POST` : `{{API_ENDPOINT}}/api/login`
```sh
Request Body
{
	"email": "uzrnem@gmail.com",
	"password": "vishnu"
}
Success Reponse
{
    "success": {
        "token": "Bearer eyJ0eXAiOiJKV1QiLCJ===TOEKN"
    }
}
Error Response
{
    "error": "Unauthorised"
}
```
### Request Body Headers for below API
  - Content-Type : `application/json`
  - authorization : `Bearer eyJ0eXAiOiJKV1QiLCJ===TOEKN`

##### Contact Add
`PUT` : `{{API_ENDPOINT}}/api/contact/`
```sh
Request Body
{
    "email": "uzrnem+3@gmail.com",
    "first_name": "bhagyesh",
    "last_name": "patel",
    "mobile" : "9604400880"
}
Success Reponse
{
    "success": true,
    "status": "success",
    "message": "Record created!",
    "data": {
        "email": "uzrnem+3@gmail.com",
        "first_name": "bhagyesh",
        "last_name": "patel",
        "mobile": "9604400880",
        "user_id": 1,
        "id": 1
    },
    "total": 0
}
Error Response
{
    "success": false,
    "status": "warning",
    "message": "Error while save data",
    "errors": {
        "first_name": [
            "The first name field is required."
        ]
    },
    "total": 0
}
```

##### Contact Edit
`POST` : `{{API_ENDPOINT}}/api/contact/1`
```sh
Request Body
{
    "email": "uzrnem+3@gmail.com",
    "first_name": "bhagyesh",
    "last_name": "gujrathi",
    "mobile" : "0987654321"
}
Success Reponse
{
    "success": true,
    "status": "success",
    "message": "Record updated!",
    "data": {
        "c_id": 1,
        "email": "uzrnem+3@gmail.com",
        "first_name": "bhagyesh",
        "last_name": "gsujrathi",
        "mobile": "9604400880",
        "user_id": 1
    },
    "total": 0
}
Error Response
{
    "success": false,
    "status": "warning",
    "message": "Error while save data",
    "errors": {
        "first_name": [
            "The first name field is required."
        ]
    },
    "total": 0
}
```

##### Contact Get
`GET` : `{{API_ENDPOINT}}/api/contact/1`
```sh
Success Reponse
{
    "success": true,
    "status": "success",
    "message": "Record found!",
    "data": {
        "c_id": 1,
        "email": "uzrnem+3@gmail.com",
        "first_name": "bhagyesh",
        "last_name": "Gujrathi",
        "mobile": "9604400880",
        "user_id": 1
    },
    "total": 0
}
Error Response
{
    "success": false,
    "status": "warning",
    "message": "No record found!",
    "errors": [],
    "total": 0
}
```

##### Contact Deleted
`DELETE` : `{{API_ENDPOINT}}/api/contact/1`
```sh
Success Reponse
{
    "success": true,
    "status": "danger",
    "message": "Record deleted!",
    "data": [],
    "total": 0
}
Error Response
{
    "success": false,
    "status": "warning",
    "message": "No record found!",
    "errors": [],
    "total": 0
}
```

##### Contact List
`GET` : `{{API_ENDPOINT}}/api/contact?pageParam={"current":1,"pageWeight":3}&sortParam={"key":"c_id","value":"asc"}&filterParam={"last_name":"Gujrathi"}`
```sh
Success Reponse
{
    "success": true,
    "status": "success",
    "message": "Listed records!",
    "data": [
        {
            "c_id": 1,
            "email": "uzrnem+3@gmail.com",
            "first_name": "bhagyesh",
            "last_name": "Gujrathi",
            "mobile": "9604400880",
            "user_id": 1,
            "created_at": "2019-10-14 12:51:40",
            "updated_at": "2019-10-14 13:01:45",
            "deleted_at": null,
            "user_name": "bhagyesh"
        }
    ],
    "total": 1
}
```

**your suggestions and thoughts will be appreciated.**

Auther

* [Bhagyesh Sunil Patel]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
