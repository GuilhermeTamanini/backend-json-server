const jsonServer = require('json-server-relationship');
const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);