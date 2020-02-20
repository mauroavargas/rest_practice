const express = require('express');
const server = express();
const PORT = process.env.PORT || 4000;

// Endpoints ES6
server.get('/', (req, res) => res.send('Hello Guys!'));

// Endppoint JS Vanilla
server.get('/prueba', function(req, res){
    res.send('Hello Prueba!');
});

// // Turn the server ON
// server.listen(PORT, () => console.log(`Server on port ${PORT}!`));


module.exports = { server, PORT };