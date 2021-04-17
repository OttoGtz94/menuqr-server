import Sequelize from 'sequelize';
import db from '../config/db.js';

const Bebida = db.define('bebidas', {
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
	alcoholic: {
		type: Sequelize.STRING,
	},
});

export default Bebida;
