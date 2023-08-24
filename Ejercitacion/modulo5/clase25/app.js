const express = require('express');
const app = express();
const rutasMain = require('./routers/main.js')

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Escuchándo en el puerto ' + PORT));

app.use('/', rutasMain);