var mongoose = require('mongoose');

// Connect MongoDB.
module.exports = function() {
	mongoose.connect('mongodb://localhost/eternity-ready', function(err, db) {
		if (!err) {
			console.log('Connected to Database!');
		} else {
			console.dir(err); //failed to connect
		}
	})
}
