/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var User = require('../models/user.js');
module.exports 	= function(app) {

	app.get('/api/users', User.findAll);

	app.get('/api/users/:id', User.findById);

	app.post('/api/users', User.create);

	app.put('/api/users/:id', User.update);

	app.delete('/api/users/:id', User.delete);

};
