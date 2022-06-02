const data = require("./db.json");
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();

const app = jsonServer.create();
const router = jsonServer.router(data);

app.db=router.db;

app.use(middlewares);
app.use(auth);
app.use(router);

app.listen(3000);
