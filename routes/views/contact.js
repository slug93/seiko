//contact 
var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry').model;

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'contact';

	view.on('post', function(next) {
		var data = req.body;
		var record = new Enquiry(data);
		console.log('contact post', data);

		record.save(function (err, resp) {
			console.log('save', err, resp);
			next();
// body...
		});
	});
	
	// Render the view
	view.render('contact');
	
};

