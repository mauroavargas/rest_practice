// Long way
// const object = require('./server');
// const PORT = object.PORT;
// const server = object.server;

// Short way
const { server, PORT } = require('./server'); 


// Turn the server ON
server.listen(PORT, () => console.log('Server on port', PORT));