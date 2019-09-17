

module.exports = function (app) {
	require('./adminRoutes')(app);
	require('./productRoutes')(app);
}
