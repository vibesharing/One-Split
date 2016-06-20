var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
  name: String,

});

var Expense = {
    model: mongoose.model('expense', expenseSchema),



		findAll: function(req, res) {
		Expense.model.find(function (err, data) {
			res.send(data);
		});
	},

	findById: function(req, res) {
		Expense.model.findById(req.params.id, {password: 0}, function (err, expense) {
			 res.json(expense);
		});
	},

	create: function(req, res) {
		Expense.model.create(req.body,
        function(err, expense) {
            if (!err)
                res.json(expense);
            else{
                res.status(500).send(err.message);
            }
	    });
	},

	update: function(req, res) {
		Expense.model.update({_id: req.params.id}, req.body, function(err, expense) {
            console.log(expense);
            if (err)
                res.status(500).send(err.message);
            res.json(expense);
	    });
	},

	delete: function(req, res){
		Expense.model.findByIdAndRemove(req.params.id, function(err){
            if (err)
                res.status(500).send(err.message);
			res.sendStatus(200);
		})
	}
};


module.exports = Expense;
