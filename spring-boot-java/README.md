# Crud App in Java Spring Boot with Jwt Login

This is starter code written in Java Spring Boot, Database is Mysql, Build tool is Maven 

Commands to run project:
  - `mvn clean install`
  - `mvn spring-boot:run`

#### Lets look at APIs there URL, Request Header and Method, Response

##### Register
`POST` : `{{API_ENDPOINT}}/user/register`
```sh
Request Body
{
    "userName": "uzrnem",
    "password": "patel",
    "firstName": "bhagyesh",
    "lastName": "patel"
}
Success Reponse
{
    "data": {
        "firstName": "Bhagyesh",
        "lastName": "patel",
        "userName": "uzrnem"
    },
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaGFneWVzaCIsImlkIjoxOCwiaWF0IjoxNTcwNTg4MTQyfQ.YfDMWLEPvbbUvEfb2VX62LpwbNQpWCUzaUIczuQLb8I"
}
Error Response
{
    "data": [
        {
            "code": "Size",
            "field": "firstName",
            "message": "First Name should have 2-20 characters"
        },
        {
            "code": "Size",
            "field": "lastName",
            "message": "Last Name should have 2-20 characters"
        }
    ],
    "success": false,
    "error": "Validation Failed"
}
```

##### Login
`POST` : `{{API_ENDPOINT}}/user/login`
```sh
Request Body
{
    "userName": "uzrnem",
    "password": "patel"
}
Success Reponse
{
    "data": {
        "firstName": "Bhagyesh",
        "lastName": "patel",
        "userName": "uzrnem"
    },
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaGFneWVzaCIsImlkIjoxOCwiaWF0IjoxNTcwNTg4MTQyfQ.YfDMWLEPvbbUvEfb2VX62LpwbNQpWCUzaUIczuQLb8I"
}
Error Response
{
    "success": false,
    "error": "User name not found."
}
```
### Request Body Headers for below API
  - Content-Type : `application/json`
  - authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1enJuZW0iLCJpZCI6MSwiaWF0IjoxNTcwNTg5MTkwfQ.nqNI8g__Yc3TGScU-qoWMiOjP0rm4SZOHIAxOD-FZsg`

##### Contact Add
`PUT` : `{{API_ENDPOINT}}/contact`
```sh
Request Body
{
    "email": "uzrnem+3@gmail.com",
    "firstName": "bhagyesh",
    "lastName": "patel",
    "mobile" : "0987654321"
}
Success Reponse
{
    "data": {
        "cId": 19,
        "firstName": "bhagyesh",
        "lastName": "patel",
        "email": "uzrnem+3@gmail.com",
        "mobile": "9604400880",
        "userId": 1,
        "created": "2019-10-09T02:47:01.658+0000"
    },
    "success": true
}
Error Response
{
    "data": [
        {
            "code": "Pattern",
            "field": "mobile",
            "message": "must match \"(^$|[0-9]{10})\""
        }
    ],
    "success": false,
    "error": "Validation Failed"
}
```

##### Contact Edit
`POST` : `{{API_ENDPOINT}}/contact/19`
```sh
Request Body
{
    "email": "uzrnem+3@gmail.com",
    "firstName": "bhagyesh",
    "lastName": "patel",
    "mobile" : "0987654321"
}
Success Reponse
{
    "data": {
        "cId": 19,
        "firstName": "bhagyesh",
        "lastName": "patel",
        "email": "uzrnem+3@gmail.com",
        "mobile": "9604400880",
        "userId": 1,
        "created": "2019-10-09T02:47:01.658+0000"
    },
    "success": true
}
Error Response
{
    "data": [
        {
            "code": "Pattern",
            "field": "mobile",
            "message": "must match \"(^$|[0-9]{10})\""
        }
    ],
    "success": false,
    "error": "Validation Failed"
}
```

##### Contact Get
`GET` : `{{API_ENDPOINT}}/contact/19`
```sh
Success Reponse
{
    "data": {
        "cId": 19,
        "firstName": "bhagyesh",
        "lastName": "patel",
        "email": "uzrnem+3@gmail.com",
        "mobile": "9604400880",
        "userId": 1,
        "created": "2019-10-09T02:47:02.000+0000"
    },
    "success": true
}
Error Response
{
    "success": false,
    "error": "Record Not Found"
}
```

##### Contact Deleted
`DELETE` : `{{API_ENDPOINT}}/contact/19`
```sh
Success Reponse
{
    "success": true,
    "message": "Item Deleted"
}
Error Response
{
    "success": false,
    "error": "Record Not Found"
}
```

##### Contact List
`GET` : `{{API_ENDPOINT}}/contact/?page=2&limit=3&filter={"firstName": "Ram"}`
```sh
Success Reponse
{
    "total": 2,
    "data": [
        {
            "cId": 9,
            "firstName": "Bhagyesh",
            "lastName": "Patel",
            "email": "gisueinc@gmail.com",
            "mobile": "1234567890",
            "userId": 13,
            "created": "2019-10-07T14:00:42.000+0000"
        },
        {
            "cId": 16,
            "firstName": "Ramesh",
            "lastName": "Suresh",
            "email": "bsp@gmail.com",
            "mobile": "9087654321",
            "userId": 13,
            "created": "2019-10-08T05:46:06.000+0000"
        }
    ],
    "success": true
}
```

**your suggestions and thoughts will be appreciated.**

Auther

* [Bhagyesh Sunil Patel]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
