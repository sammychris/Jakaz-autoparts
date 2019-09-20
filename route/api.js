

module.exports = function (app) {
	require('./categoryRoutes')(app);
	require('./adminRoutes')(app);
	require('./productRoutes')(app);
}
