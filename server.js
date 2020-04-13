const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/inventory', (req, res) => {
    res.sendFile(__dirname + '/public/inventory.html');
});

app.listen(port, (err) => {
    if(!err) {
        console.log(`Listening on port ${port}`);
    }
});