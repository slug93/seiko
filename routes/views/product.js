
var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	

	// locals.section is used to set the currently selected
	// item in the header navigation.
	//locals.section = 'home';

  var id = req.params.id;

view.on('init', function(next) {
	var q =  keystone.list('Product').model.findOne({
		_id: id
	});

	q.exec(function (err, respone) {
		console.log('data', respone);
		locals.data = respone;
		next();
	})

});
	
	// Render the view
	view.render('product');
	
};

