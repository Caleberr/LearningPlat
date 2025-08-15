const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://learningplatapi.onrender.com',
      changeOrigin: true,
      secure: true,
    })
  );
};