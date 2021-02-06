# NodeJS Starter in TypeScript
NodeJS Starter CRUD (MongoDB, Express, TypeScript)

Development

```bash
npm run dev
```

Running tests

```bash
npm test
```

### Crud API : localhost:3000/api/tags
```sh
Call : add
Body :  {
    "action" : "add",
    "data" : {
        "name" : "chai"
    }
}
Reposnse: {
    "success": true,
    "status": "success",
    "message": "save success",
    "data": {
        "_id": "5c83c1643069343f920f26c9",
        "name": "chai",
        "date": "2019-03-09T13:36:36.765Z",
        "__v": 0
    },
    "errors": null,
    "total": 0
}


Call : edit
Body :  {
    "action" : "edit",
    "id" : "5c83c0e2b8e7c83f5f85f91d",
    "data" : {
        "name" : "tea"
    }
}
Reposnse: {
    "success": true,
    "status": "success",
    "message": "update success",
    "data": {
        "name": "tea"
    },
    "errors": null,
    "total": 0
}


Call : get
Body :  {
    "action" : "get",
    "id" : "5c83c0e2b8e7c83f5f85f91d"
}
Reposnse: {
    "success": false,
    "status": "warning",
    "message": "invalid id",
    "data": null,
    "errors": {
        "id": "5c83c0e2b8e7c83f5f85f911d",
        "message": "invalid id"
    },
    "total": 0
}


Call : delete
Body :  {
    "action" : "delete",
    "id" : "5c83c0e2b8e7c83f5f85f91d"
}
Reposnse: {
    "success": true,
    "status": "success",
    "message": "delete success",
    "data": null,
    "errors": null,
    "total": 0
}
```

Skeleton for Node.js [1]

Special Thanks to

* [Gergely Nemeth]

Auther

* [Bhagyesh Sunil Patel]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
   [1]: <https://github.com/RisingStack/node-typescript-starter>
   [Gergely Nemeth]: <https://github.com/gergelyke>
