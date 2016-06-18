var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
  name: String,
  description: String,
	devise: String,
	participants: Array,
	expenses: Array,
  // isAdmin : { type: Boolean, default: false}
});

var Account = {
    model: mongoose.model('Account', accountSchema),



		findAll: function(req, res) {
		Account.model.find(function (err, data) {
			res.send(data);
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
                if (err.code === 11000 || err.code === 11001)
                    err.message = "Accountname " + req.body.name  + " already exist";

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
		})
	}
}


module.exports = Account;
