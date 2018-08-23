# Merns-Contact-List
Contact List using MERNS (MongoDB, Express, ReactJS, NodeJS and SCSS)

Extra feactures with ReactJS are as follow.

  - Bundling
  - Lazyload
  - Redux


Dependencies required

  - Node v10.9.0
  - NPM v6.2.0
  - MongoDB


Setup Mongo Server (if u want secure connection)

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
$ npm run server-install
$ npm run client-install
```


Start React Code using Webpack command in Client Directory

```sh
$ npm run client-webpack
```

Or Run command in Watch Mode

```sh
$ npm run client-watch
```


Start Node Server

```sh
$ npm run sermon
```

or (for while devlopment)

```sh
$ npm run devmon
```

Core Team

* [Bhagyesh Sunil Patel]
* [Sagar Ashok Rajkule]


[//]: # (These are reference links used in the body of this note)

   [Bhagyesh Sunil Patel]: <https://github.com/uzrnem>
   [Sagar Ashok Rajkule]: <https://github.com/sagarrajkule>
