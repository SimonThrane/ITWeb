const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const test = require('./test.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('',test);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log('Server started on port ' + port);
});