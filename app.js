require('dotenv').config();
require('./src/configs/server');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.APP_PORT || 3000;

const app = express();

/** Middlewares **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

/** Not Found Router **/
app.get('*', (_, res) => {
    res.status(404).send("Not Found");
});

/** Routers **/
app.use('/api/v1', require('./src/routes'));

app.listen(port, () => console.log('Server running on port', port));