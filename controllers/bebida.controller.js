import Bebida from '../models/bebida.model.js';

const saveDrink = async (req, res) => {
	const {
		name,
		price,
		ingredients,
		image,
		description,
		alcoholic,
	} = req.body;

	try {
		await Bebida.create({
			name: name,
			price: price,
			ingredients: ingredients,
			image: image,
			description: description,
			alcoholic: alcoholic,
		});
		res.json({
			message: 'Guardado en la BD',
		});
	} catch (error) {
		console.log(error);
		console.log('no se guardo :(');
	}
};

const getDrinks = async (req, res) => {
	try {
		const bebidas = await Bebida.findAll();
		console.log(bebidas);
		res.json({
			bebidas,
		});
	} catch (error) {
		console.log(error);
	}
};

const updateDrink = async (req, res) => {
	const {
		name,
		price,
		ingredients,
		image,
		description,
		alcoholic,
	} = req.body;
	const id = req.params.id;
	try {
		await Bebida.update(
			{
				name,
				price,
				ingredients,
				image,
				description,
				alcoholic,
			},
			{
				where: { id: id },
			},
		);
		res.json({
			message: 'Actualizado',
		});
	} catch (error) {
		console.log(error);
		console.log('No se actualizo');
	}
};

const deleteDrink = async (req, res) => {
	const id = req.params.id;
	try {
		Bebida.destroy({
			where: { id: id },
		});
		res.json({
			message: 'Eliminado',
		});
	} catch (error) {
		console.log(error);
		console.log('No se elimino');
	}
};

export { saveDrink, getDrinks, updateDrink, deleteDrink };
