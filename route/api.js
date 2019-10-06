

module.exports = function (app) {
	require('./contactRoutes')(app);
	require('./categoryRoutes')(app);
	require('./adminRoutes')(app);
	require('./productRoutes')(app);
}
