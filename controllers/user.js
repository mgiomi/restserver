const { reponse, request } = require('express');

const getUser = (req = request, res = reponse) => {
	const { name, apiKey = 'XXXXXXX' } = req.query;

	res.json({
		msg: 'get - ctrl',
		name,
		apiKey,
	});
};

const createUser = (req, res = reponse) => {
	const { name, id } = req.body;

	res.json({
		msg: 'post - ctrl',
		name,
		id,
	});
};

const updateUser = (req, res = reponse) => {
	const { id } = req.params;

	res.json({
		msg: 'update - ctrl',
		id,
	});
};

const deleteUser = (req, res = reponse) => {
	res.json({
		msg: 'delete - ctrl',
	});
};

module.exports = {
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
