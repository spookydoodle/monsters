// Info: https://dev.to/waqasabbasi/building-a-search-engine-api-with-node-express-and-puppeteer-using-google-search-4m21
const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');
    

// Connect to Mongo DB
// For docker image use mongo:27017, for dev localhost:27017. 
// The same in client package.json use proxy api:4000 for docker image and localhost:4000 for dev
// const databaseUrl = process.env.DATABAS_EURL || 'mongodb://mongo:27017/monsters';  
const databaseUrl = process.env.DATABASE_URL || 'mongodb://mongo:27017/monsters';
console.log(`Connecting to database.`);

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialises the express server on the process.env.PORT or 8080 
// For deployment use only process.env.PORT, otherwise the app won't work.
PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});