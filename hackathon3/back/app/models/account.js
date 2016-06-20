var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
  name: String,
  description: String,
	devise: String,
	participants: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
	}],
	expenses:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'expense'
	}],
});

var Account = {
    model: mongoose.model('Account', accountSchema),



		findAll: function(req, res) {
		Account.model.find()
			.populate("expenses")
			.populate("participants")
			.exec(function (err, accounts) {
		res.json(accounts);
	});

	},

	findById: function(req, res) {
		Account.model.findById(req.params.id, {password: 0}, function (err, account) {
			 res.json(account);
		});
	},

	create: function(req, res) {
		Account.model.create(req.body,
        function(err, account) {
            if (!err)
                res.json(account);
            else{
                res.status(500).send(err.message);
            }
	    });
	},

	update: function(req, res) {
		Account.model.update({_id: req.params.id}, req.body, function(err, account) {
            console.log(account);
            if (err)
                res.status(500).send(err.message);
            res.json(account);
	    });
	},

	delete: function(req, res){
		Account.model.findByIdAndRemove(req.params.id, function(err){
            if (err)
                res.status(500).send(err.message);
			res.sendStatus(200);
		});
	},


	addParticipants: function(req, res){
		console.log('arrived');
		Account.model.findById(req.params.id, function(err, account){
			account.participants.push(req.body.id_participant);
			account.save();

			Account.findAll(req, res);

		});
	},

addExpenses: function(req, res){
	User.model.findById(req.params.id, function(err, account){
		account.expenses.push(req.body.id_expenses);
		account.save();

		User.findAll(req, res);

	});
}
};


module.exports = Account;
