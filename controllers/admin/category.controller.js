const Category = require('../../models/category.model');

module.exports.index = async (req, res, next) => {
	try {
		const categories = await Category.find();
		res.render('admin/pages/list-category', { title: "List category", categories: categories });
	} catch(err) {
		next(err);		
	}
}

module.exports.create = (req, res) => {
	res.render('admin/pages/add-category', { title: "Add category" })
}

module.exports.store = async (req, res, next) => {
	try {
		const name = req.body.name;
		Category.insertMany([{name: name}]);
		const categories = await Category.find();
		res.render('admin/pages/list-category', { title: "List category", categories: categories });
	} catch(err) {
		next(err)
	}
}

module.exports.edit = (req, res) => {
	res.redirect('/admin/list-category');
}

module.exports.update = (req, res) => {
	res.redirect('/admin/list-category');
}

module.exports.destroy = (req, res) => {
	res.redirect('/admin/list-category');
}
