# Node.js – JWT Authentication & Authorization with JSONWebToken & Sequelize

## Project setup
```
npm install
```

### Run
```
node server.js
```

### Install mysql on Ubuntu 20.04:

https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04

```
create database db_name;
```

### Initialize the db:

You need to run following SQL script:
```
mysql> INSERT INTO roles VALUES (1, 'user', now(), now());
mysql> INSERT INTO roles VALUES (2, 'moderator', now(), now());
mysql> INSERT INTO roles VALUES (3, 'admin', now(), now());
```

## Settings

- User login token set to expire after 24 hours. To extend this period, update node-js-jwt-auth/app/controllers/auth.controller.js 


## User Registration, User Login and Authorization process.

For more detail, please visit:
> [Node.js JWT Authentication & Authorization example](https://bezkoder.com/node-js-jwt-authentication-mysql/)

You may need to implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

> [Node.js JWT Refresh Token example](https://bezkoder.com/jwt-refresh-token-node-js/)

Working with Front-end:
> [React](https://www.bezkoder.com/react-jwt-auth/) / [React + Redux](https://www.bezkoder.com/react-redux-jwt-auth/)

## More Practice:
> [Build Node.js Rest APIs with Express, Sequelize & MySQL](https://bezkoder.com/node-js-express-sequelize-mysql/)

> [Server side Pagination in Node.js with Sequelize and MySQL](https://bezkoder.com/node-js-sequelize-pagination-mysql/)

> [Node.js Express File Upload Rest API example](https://bezkoder.com/node-js-express-file-upload/)

> [Node.js Express File Upload with Google Cloud Storage example](https://bezkoder.com/google-cloud-storage-nodejs-upload-file/)

> [Node.js JWT Authentication & Authorization example with MongoDB](https://bezkoder.com/node-js-mongodb-auth-jwt/)

Associations:
> [Sequelize Associations: One-to-Many Relationship example](https://bezkoder.com/sequelize-associate-one-to-many/)

> [Sequelize Associations: Many-to-Many Relationship example](https://bezkoder.com/sequelize-associate-many-to-many/)

Deployment:
> [Deploying/Hosting Node.js app on Heroku with MySQL database](https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)

Integration on same Server/Port:
> [Integrate Vue with Node.js Express](https://www.bezkoder.com/serve-vue-app-express/)

> [Integrate React with Node.js Express](https://www.bezkoder.com/integrate-react-express-same-server-port/)

