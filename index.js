// EXPRESS //
const express = require('express');
// ROUTE //
const route = require('./Controllers');
// CORS //
const cors = require('cors');
// PORT //
const port = parseInt(process.env.PORT) || 4000;
const app = express();
const {errorHandling} = require('./Middleware/ErrorHandling');
const cookieParser = require('cookie-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(
    cors(),
    route,
    cookieParser(),
    express.json(),
    express.urlencoded({extended: true})
);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.use(errorHandling);