/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var Account = require('../models/account.js');
module.exports 	= function(app) {

	app.get('/api/accounts', Account.findAll);

	app.get('/api/accounts/:id', Account.findById);

	app.post('/api/accounts', Account.create);

	app.put('/api/accounts/:id', Account.update);

	app.put('/api/accounts/participants/:id', Account.addParticipants);
	app.put('/api/accounts/expenses/:id', Account.addExpenses);

	app.delete('/api/accounts/:id', Account.delete);

};
