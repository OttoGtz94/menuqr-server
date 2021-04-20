import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import cors from 'cors';

const app = express();
// habilitar cors
app.use(cors());

// conectar a bd mysql
db.authenticate()
	.then(() => console.log('Base de datos conectada'))
	.catch(e =>
		console.log(
			`Error al conectar en la base de datos---- ${e}`,
		),
	);

// puerto
const port = process.env.port || 5000;

// body parser
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
	console.log(`Servidor corriendo por el puerto ${port}`);
});
