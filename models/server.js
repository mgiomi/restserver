const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.usersRoutes = '/api/users';

		//Middlewares.
		this.middlewares();
		//Routes aplicactións.
		this.routes();
	}

	middlewares() {
		//Public directory.
		this.app.use(express.static('public'));
		//CORS enable.
		this.app.use(cors());
		//Set type of data body.
		this.app.use(express.json());
	}

	routes() {
		this.app.use(this.usersRoutes, require('../routes/user'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Example app listening at http://localhost:${this.port}`);
		});
	}
}

module.exports = Server;
