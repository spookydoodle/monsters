// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//     //   target: process.env.REACT_APP_PROXY || 'http://localhost:4000',
//       target: process.env.NODE_ENV === 'production' ? 'https://api-dot-monsters-281717.ew.r.appspot.com:4000' : 'http://localhost:4000',
//       changeOrigin: true,
//     })
//   );
// };