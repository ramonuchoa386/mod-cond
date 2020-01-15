const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(proxy('/notes', { target: 'http://localhost:2000' }));
}

