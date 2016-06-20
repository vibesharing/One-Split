/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var Expense = require('../models/expense.js');
module.exports 	= function(app) {

	app.get('/api/expenses', Expense.findAll);

	app.get('/api/expenses/:id', Expense.findById);

	app.post('/api/expenses', Expense.create);

	app.put('/api/expenses/:id', Expense.update);

	app.delete('/api/expenses/:id', Expense.delete);

};
