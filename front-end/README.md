# VIDI FX


## Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

### Set port
.env
```
PORT=8081
```

### Run locally

```
npm start
# or
yarn start
```

Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.


### Next steps

- 

###  rate feeds APIs
- free historical daily: https://exchangerate.host/ 
- free or cheap: https://www.exchangerate-api.com/#pricing
- crypto: potentially https://www.cryptocompare.com/
- historical data: https://eodhistoricaldata.com/

### References

- Theme: https://preview.themeforest.net/item/tradio-cryptocurrency-exchange-react-app-dashboard/full_screen_preview/27503351?_ga=2.256887752.2124247770.1657022302-1866033775.1654610905&_gac=1.89318121.1654610909.CjwKCAjw7vuUBhBUEiwAEdu2pDZ_YpRZ_2oEuUarQ-zjIfTVZEa6d7bfxfWKrmwNGU4YhvrlcA3VUBoCSf4QAvD_BwE
- Trading view widget: https://github.com/rafaelklaessen/react-tradingview-widget 


# Authentication & Authorization architecture

React Token Authentication architecture with JWT, LocalStorage, React Router, Axios and Bootstrap:
- JWT Authentication Flow for User Signup & User Login
- Project Structure for React JWT Authentication with LocalStorage, React Router & Axios
- Creating React Components with Form Validation
- React Components for accessing protected Resources (Authorization)
- Dynamic Navigation Bar in React App

For more detail, please visit:
> [React (without Redux) JWT Authentication & Authorization example](https://bezkoder.com/react-jwt-auth/)

> [React - How to Logout when Token is expired](https://www.bezkoder.com/react-logout-token-expired/)

> [React Hooks + Redux: JWT Authentication & Authorization example](https://bezkoder.com/react-hooks-redux-login-registration-example/)

> [React JWT Authentication & Authorization (without Redux) example](https://bezkoder.com/react-jwt-auth/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Related Posts
> [In-depth Introduction to JWT-JSON Web Token](https://bezkoder.com/jwt-json-web-token/)

> [React.js CRUD example to consume Web API](https://bezkoder.com/react-crud-web-api/)

> [React Redux CRUD App example with Rest API](https://bezkoder.com/react-redux-crud-example/)

> [React Pagination example](https://bezkoder.com/react-pagination-material-ui/)

> [React File Upload with Axios and Progress Bar to Rest API](https://bezkoder.com/react-file-upload-axios/)

Fullstack (JWT Authentication & Authorization example):
> [React + Spring Boot](https://bezkoder.com/spring-boot-react-jwt-auth/)

> [React + Node.js Express](https://bezkoder.com/react-express-authentication-jwt/)

Fullstack CRUD with Node.js Express:
> [React.js + Node.js Express + MySQL](https://bezkoder.com/react-node-express-mysql/)

> [React.js + Node.js Express + PostgreSQL](https://bezkoder.com/react-node-express-postgresql/)

> [React.js + Node.js Express + MongoDB](https://bezkoder.com/react-node-express-mongodb-mern-stack/)

Fullstack CRUD with Spring Boot:
> [React.js + Spring Boot + MySQL](https://bezkoder.com/react-spring-boot-crud/)

> [React.js + Spring Boot + PostgreSQL](https://bezkoder.com/spring-boot-react-postgresql/)

> [React.js + Spring Boot + MongoDB](https://bezkoder.com/react-spring-boot-mongodb/)

Fullstack CRUD with Django:
> [React.js + Django Rest Framework](https://bezkoder.com/django-react-axios-rest-framework/)

Integration (run back-end & front-end on same server/port)
> [How to integrate React.js with Spring Boot](https://bezkoder.com/integrate-reactjs-spring-boot/)

> [Integrate React with Node.js Express on same Server/Port](https://bezkoder.com/integrate-react-express-same-server-port/)

Serverless:
> [React Firebase CRUD App with Realtime Database](https://bezkoder.com/react-firebase-crud/)

> [React Firestore CRUD App example | Firebase Cloud Firestore](https://bezkoder.com/react-firestore-crud/)


## Errors

#### ENOSPC: System limit for number of file watchers reached, watch '/home/fox/Code/trade-authentication/front-end/src/reducers/message.js'



Linux uses the inotify package to observe filesystem events, individual files or directories.

Since React / Angular hot-reloads and recompiles files on save it needs to keep track of all project's files. Increasing the inotify watch limit should hide the warning messages.

You could try editing

// insert the new value into the system config
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

// check that the new value was applied
cat /proc/sys/fs/inotify/max_user_watches

// config variable name (not runnable)
fs.inotify.max_user_watches=524288

