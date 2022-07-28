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

For more detail, please visit:
> [React (without Redux) JWT Authentication & Authorization example](https://bezkoder.com/react-jwt-auth/)

> [React - How to Logout when Token is expired](https://www.bezkoder.com/react-logout-token-expired/)

## Related Posts
> [In-depth Introduction to JWT-JSON Web Token](https://bezkoder.com/jwt-json-web-token/)

> [React File Upload with Axios and Progress Bar to Rest API](https://bezkoder.com/react-file-upload-axios/)

Fullstack CRUD with Node.js Express:
> [React.js + Node.js Express + MySQL](https://bezkoder.com/react-node-express-mysql/)

> [React.js + Node.js Express + PostgreSQL](https://bezkoder.com/react-node-express-postgresql/)

> [React.js + Node.js Express + MongoDB](https://bezkoder.com/react-node-express-mongodb-mern-stack/)

> [Integrate React with Node.js Express on same Server/Port](https://bezkoder.com/integrate-react-express-same-server-port/)


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

#### removed Rangeslider from package.json
- "react-rangeslider": "^2.2.0",
- "react-slick": "^0.26.1", //only used in testimonials.jsx
- "slick-carousel": "^1.8.1", //only used in testimonials.jsx
- "@testing-library/jest-dom": "^4.2.4",
- "@testing-library/react": "^9.5.0",
- "@testing-library/user-event": "^7.2.1",
- "node-sass": "^4.14.1",  //replaced by more recent version
-   "devDependencies": {
    "typescript": "^4.7.4"
  }


 removal of import react-rangeslider in fx.jsx is causing this error:
    unreachable code after return statement