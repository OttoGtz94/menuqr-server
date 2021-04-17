import Sequelize from 'sequelize';
import db from '../config/db.js';

const Comida = db.define('comidas', {
	name: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.STRING,
	},
	ingredients: {
		type: Sequelize.STRING,
	},
	image: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
});

export default Comida;
