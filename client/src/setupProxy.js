const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/projects/03/api/v3',
    createProxyMiddleware({
      // target: 'https://lucaswgong.com/projects/03',
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};