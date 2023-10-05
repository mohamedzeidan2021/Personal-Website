const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use(express.static('public'));

app.use('/pics', express.static('pics'));
app.use('/js', express.static('js')) //any js file

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css')
});

app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
});

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});