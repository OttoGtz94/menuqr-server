import Promo from '../models/promo.model.js';

const savePromo = async (req, res) => {
	const {
		name,
		price,
		entry,
		soup,
		main_course,
		dessert,
		drink,
		date,
	} = req.body;

	try {
		await Promo.create({
			name,
			price,
			entry,
			soup,
			main_course,
			dessert,
			drink,
			date,
		});
		res.json({
			message: 'Promo guardada',
		});
	} catch (error) {
		console.log(error);
	}
};

const getPromos = async (req, res) => {
	try {
		const promos = await Promo.findAll();
		res.json({
			promos,
		});
	} catch (error) {
		console.log(error);
	}
};

const updatePromo = async (req, res) => {
	const {
		name,
		price,
		entry,
		soup,
		main_course,
		dessert,
		drink,
		date,
	} = req.body;

	const id = req.params.id;
	try {
		await Promo.update(
			{
				name,
				price,
				entry,
				soup,
				main_course,
				dessert,
				drink,
				date,
			},
			{ where: { id: id } },
		);
		res.json({
			message: 'Promo Actualizada',
		});
	} catch (error) {
		console.log(error);
	}
};

const deletePromo = async (req, res) => {
	const id = req.params.id;
	try {
		Promo.destroy({ where: { id: id } });
		res.json({
			message: 'Eliminado',
		});
	} catch (error) {
		console.log(error);
	}
};

export { savePromo, getPromos, updatePromo, deletePromo };
