const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const app = require('./app');


const app = express();
const swaggerDoc = require('./swagger');
const PORT = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use('/api', routes); // All API routes will be prefixed with /api
app.use('/api-docs', swaggerDoc.serve, swaggerDoc.setup);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });


module.exports = app;
