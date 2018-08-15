# Merns-Contact-List
Contact List using MERNS (MongoDB, Express, ReactJS, NodeJS and SCSS)

Extra feactures with ReactJS are as follow.

  - Bundling
  - Lazyload
  - Redux


Dependencies required

  - Node v8.10.0
  - NPM v5.7.1
  - MongoDB


Setup Mongo Server

```sh
$ use begin
$ db.createUser(
   {
     user: "root",
     pwd: "t",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```


Install NPM Dependencies

```sh
$ npm install
$ npm run client-install
```


Start React Code using Webpack command in Client Directory

```sh
client $ npm run client-webpack
```

Or Watch Mode

```sh
client $ run client-watch
```


Start Node Server

```sh
$ nodemon server.js
```

Core Team

* [Bhagyesh Sunil Patel]
* [Sagar Ashok Rajkule]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
   [Sagar Ashok Rajkule]: <https://github.com/sagarrajkule>
