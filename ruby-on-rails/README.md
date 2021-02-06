# Crud App in Ruby on Rails with Jwt Login

This is starter code written in Ruby on Rails, Database is Mysql

Commands to run project:
  - `rails db:reset`
  - `rails db:migrate`

#### Lets look at APIs there URL, Request Header and Method, Response

##### Register
`POST` : `{{API_ENDPOINT}}/register`
```sh
Request Body
{
	"name" : "Gisue Inc",
	"password" : "gisue",
	"email" : "uzrnem@hotmail.com"
}
Success Reponse
{
    "success": true,
    "message": "Account Created!",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo2LCJuYW1lIjoiR2lzdWUgSW5jIiwiZW1haWwiOiJ1enJuZW1AaG90bWFpbC5jb20ifSwiZXhwIjoxNTgzMTc0NTY2LCJpYXQiOjE1ODMxMzg1NjZ9.IHKTuwKlyv-cOQwiKcnwbxOX1Z7Ajc3g-Ny8V8iv99k",
    "user": {
        "id": 6,
        "name": "Gisue Inc",
        "email": "uzrnem@hotmail.com"
    }
}
Error Response
{
    "success": false,
    "message": "Validation Failed!",
    "error": {
        "email": [
            "has already been taken"
        ]
    }
}
```

##### Login
`POST` : `{{API_ENDPOINT}}/login`
```sh
Request Body
{
	"email" : "bhagyeshsunilpatel@gmail.com",
	"password" : "bhagyesh"
}
Success Reponse
{
    "success": true,
    "message": "User Logged In!",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiQmhhZ3llc2ggUGF0ZWwiLCJlbWFpbCI6ImJoYWd5ZXNoc3VuaWxwYXRlbEBnbWFpbC5jb20ifSwiZXhwIjoxNTgzMTc0OTEzLCJpYXQiOjE1ODMxMzg5MTN9.q1Z4iz47gQzRoYLo75IV1FzxHtsjOwKGARKWCu4OXS0",
    "user": {
        "id": 1,
        "name": "Bhagyesh Patel",
        "email": "bhagyeshsunilpatel@gmail.com"
    }
}
Error Response
{
    "success": false,
    "message": "Password not matched!"
}
```
### Request Body Headers for below API
  - Content-Type : `application/json`
  - authorization : `eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiQmhhZ3llc2ggUGF0ZWwiLCJlbWFpbCI6ImJoYWd5ZXNoc3VuaWxwYXRlbEBnbWFpbC5jb20ifSwiZXhwIjoxNTgzMTc0OTEzLCJpYXQiOjE1ODMxMzg5MTN9.q1Z4iz47gQzRoYLo75IV1FzxHtsjOwKGARKWCu4OXS0`

##### Contact Add
`PUT` : `{{API_ENDPOINT}}/contact`
```sh
Request Body
{
	"name" : "Bhagyesh Patel",
	"mobile" : "+919604400880",
	"email" : "uzrnem@gmail.com"
}
Success Reponse
{
    "success": true,
    "message": "Contact Created!",
    "data": {
        "id": 7,
        "mobile": "919604400880",
        "email": "uzrnem1@gmail.com"
    }
}
Error Response
{
    "success": false,
    "message": "Validation Failed!",
    "error": {
        "mobile": [
            "has already been taken"
        ]
    }
}
```

##### Contact Edit
`POST` : `{{API_ENDPOINT}}/contact/7`
```sh
Request Body
{
	"name" : "Bhagyesh Patel",
	"mobile" : "9604400880",
	"email" : "uzrnem+3@gmail.com"
}
Success Reponse
{
    "success": true,
    "message": "Contact Updated!",
    "data": {
        "id": 7,
        "mobile": "819604400880",
        "email": "uzrnem+3@gmail.com"
    }
}
Error Response
{
    "success": false,
    "message": "Validation Failed!",
    "error": {
        "mobile": [
            "has already been taken"
        ]
    }
}
```

##### Contact Get
`GET` : `{{API_ENDPOINT}}/contact/7`
```sh
Success Reponse
{
    "success": true,
    "message": "Contact Found!",
    "data": {
        "id": 7,
        "mobile": "819604400880",
        "email": "uzrnem+3@gmail.com"
    }
}
Error Response
{
    "success": false,
    "message": "Contact Not Found!"
}
```

##### Contact Deleted
`DELETE` : `{{API_ENDPOINT}}/contact/7`
```sh
Success Reponse
{
    "success": true,
    "message": "Contact Deleted!"
}
Error Response
{
    "success": false,
    "message": "Contact Not Found!"
}
```

##### Contact List
`GET` : `{{API_ENDPOINT}}/contact?page=1&limit=2&filter={"name": "Bhagyesh"}&sort={"key":"id","value":"desc"}`
```sh
Success Reponse
{
    "success": true,
    "message": "Contact List!",
    "total": 4,
    "data": [
        {
            "id": 6,
            "email": "uzrnem@gmail.com",
            "name": "Bhagyesh Patel",
            "mobile": "+919604400880"
        },
        {
            "id": 5,
            "email": "GisueInc@gmail.com",
            "name": "Bhagyesh Patel",
            "mobile": "9604400880"
        }
    ]
}
```

**your suggestions and thoughts will be appreciated.**

Auther

* [Bhagyesh Sunil Patel]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
