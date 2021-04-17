import Comida from '../models/comida.model.js';

const saveFood = async (req, res) => {
	// console.log(req);
	const {
		name,
		price,
		ingredients,
		image,
		description,
	} = req.body;
	console.log(req);

	try {
		await Comida.create({
			name: name,
			price: price,
			ingredients: ingredients,
			image: image,
			description: description,
		});
		res.json({
			message: 'Guardado en BD',
		});
		return;
	} catch (error) {
		console.log(error);
		console.log('No se inserto :(');
	}
};

const getFoods = async (req, res) => {
	const comidas = await Comida.findAll();
	console.log(comidas);
	res.json({
		comidas,
	});
};

const updateFood = async (req, res) => {
	// console.log(req);
	const {
		name,
		price,
		ingredients,
		image,
		description,
	} = req.body;
	// console.log(req.params);
	const id = req.params.id;
	console.log(id);
	try {
		await Comida.update(
			{ name, price, ingredients, image, description },
			{
				where: { id: id },
			},
		);
		res.json({
			message: 'Actualizado',
		});
	} catch (error) {
		console.log(error);
		console.log('No se actualizo ');
	}
};

const deleteFood = async (req, res) => {
	const id = req.params.id;
	try {
		Comida.destroy({
			where: {
				id: id,
			},
		});
		res.json({
			message: 'Eliminado',
		});
	} catch (error) {
		console.log('No se elimino');
	}
};

export { saveFood, getFoods, updateFood, deleteFood };
