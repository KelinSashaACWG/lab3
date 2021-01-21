
/*
 * GET home page.
 */

exports.view = function(req, res){
	var myName = req.params.userName;
	if(myName === undefined) {
		myName = 'World';
	}
	console.log("My name is " + myName);
	res.render('index', {
		'name': myName,
	});
};
