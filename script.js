const express = require("express");
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/contact', (req, res) => {
    const contactObj = {
        name: "Abhishek",
        age: 20,
        address: "Bangalore"
    };
    res.send(contactObj);
});

app.get('/:country/:city', (req, res) => {
    res.send(`${req.params.country} ${req.params.city} page`);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});