import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const db = new Sequelize(
	'menuqr',
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: '127.0.0.1',
		port: '3306',
		dialect: 'mysql',
		define: {
			timestamps: false,
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 3000,
			idle: 10000,
		},
		operatorAliases: false,
	},
);

export default db;
