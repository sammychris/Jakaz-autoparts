

module.exports = function (app) {
	require('./partRoutes')(app);
	require('./adminRoutes')(app);
	require('./imageRoutes')(app);
}
