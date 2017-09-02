import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import PersonDAO from './person.dao';

var app = express();
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/person')
    .post((req, res) => {
        PersonDAO.create(req.body);           
}).get((req, res) => {
        PersonDAO.read(req.params.name);
});

app.listen(3000, () => {
    console.info('Example app listening on port 3000'); 
});