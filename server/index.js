// Info: https://dev.to/waqasabbasi/building-a-search-engine-api-with-node-express-and-puppeteer-using-google-search-4m21
const express = require('express'),
    app = require('./app'),
    mongoose = require('mongoose'),
    PORT = process.env.SERVERPORT || 4000;

// Connect to Mongo DB
// For docker image use mongo:27017, for dev localhost:27017. 
// The same in client package.json use proxy api:4000 for docker image and localhost:4000 for dev
// const databaseUrl = process.env.DATABASEURL || 'mongodb://mongo:27017/monsters';  
const databaseUrl = process.env.DATABASEURL || 'mongodb://localhost:27017/monsters';
// console.log(`Connecting to database:  ${databaseUrl}`);

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialises the express server on the port from process.env or 4000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});