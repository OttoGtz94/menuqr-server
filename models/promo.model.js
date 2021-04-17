import Sequelize from 'sequelize';
import db from '../config/db.js';

const Promo = db.define('promociones', {
	name: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.STRING,
	},
	entry: {
		type: Sequelize.STRING,
	},
	soup: {
		type: Sequelize.STRING,
	},
	main_course: {
		type: Sequelize.STRING,
	},
	dessert: {
		type: Sequelize.STRING,
	},
	drink: {
		type: Sequelize.STRING,
	},
	date: {
		type: Sequelize.STRING,
	},
});

export default Promo;
