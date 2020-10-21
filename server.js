var express = require('express');

var port = process.env.WEB_PORT || 80;

var app = express();

var logger = (req, res, next) => {
    console.log(req.originalUrl);
    next();
}

app.all('/*', logger);

app.use(express.static('app/dist'));


app.listen(port, function () {
    console.log('Web server listening on port ' + port);
});