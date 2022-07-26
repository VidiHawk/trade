# Node.js – JWT Authentication & Authorization with JSONWebToken & Sequelize

## Next

Id
first name
last name
email
email2
phone
password
gov_id
business name
address 1
address 2
city 
postcode
country

account 1 
account 2
beneficiary1
beneficiary2



## Project setup
```
npm install
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

### create a .env file

In the root directory, add a .env file with:
```
MYSQL_NAME=your_mysql_name
MYSQL_KEY=your_mysql_password
```

### Run
```
node server.js
```
Or 

To make sure the server reloads every time you make a change to the code base, you can run:
```
nodemon server
```
If nodemon is not installed on your system, you can install it by running:
```
sudo npm install nodemon --location=global 
```



## Settings

- User login token set to expire after 24 hours. To extend this period, update node-js-jwt-auth/app/controllers/auth.controller.js 


## Additional useful resources:

For more detail, please visit:
> [Node.js JWT Authentication & Authorization example](https://bezkoder.com/node-js-jwt-authentication-mysql/)

You may need to implement Refresh Token: 

> [Node.js JWT Refresh Token example](https://bezkoder.com/jwt-refresh-token-node-js/)

> [Node.js Express File Upload Rest API example](https://bezkoder.com/node-js-express-file-upload/)

> [Node.js JWT Authentication & Authorization example with MongoDB](https://bezkoder.com/node-js-mongodb-auth-jwt/)

> [Node.js JWT Authentication & Authorization example with PostgreSQL](https://www.bezkoder.com/node-js-jwt-authentication-postgresql/)


> [Integrate React with Node.js Express](https://www.bezkoder.com/integrate-react-express-same-server-port/)

