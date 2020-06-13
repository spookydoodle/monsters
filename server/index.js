// Info: https://dev.to/waqasabbasi/building-a-search-engine-api-with-node-express-and-puppeteer-using-google-search-4m21
const express = require('express');
const app = express();
const port = 4000;

// Routes
require('./routes/search')(app);


//Initialises the express server on the port 30000
app.listen(port, () => console.log(`App listening on port ${port}!`));