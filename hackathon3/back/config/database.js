/* ------------------------------------------------------------------------- *\
	 						    DATABASE CONFIG
\* ------------------------------------------------------------------------- */

var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/one|split');
