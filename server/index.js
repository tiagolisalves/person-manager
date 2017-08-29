var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/person')
    .post((req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json(req.body);
}).get((req, res) => {
    console.log('GET');
    res.send(`Get ${req.params}`);
});

app.listen(3000, () => {
    console.info('Example app listening on port 3000'); 
});