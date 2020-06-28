const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  dataBaseUrl: process.env.DATABASE_URL,
  serverPort: process.env.SERVER_PORT,
};