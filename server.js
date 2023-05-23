const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());


app.use('/', routes);


app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
