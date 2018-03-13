const express = require('express');
const path = require('path');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));
app.use(awsServerlessExpressMiddleware.eventContext());

app.get('/app*', (req, res) => {
  res.render('index');
});

module.exports = app;
