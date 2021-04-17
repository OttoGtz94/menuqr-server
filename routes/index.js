import express from 'express';
import {
	deleteDrink,
	getDrinks,
	saveDrink,
	updateDrink,
} from '../controllers/bebida.controller.js';
import {
	deleteFood,
	getFoods,
	saveFood,
	updateFood,
} from '../controllers/comida.controller.js';
import {
	deletePromo,
	getPromos,
	savePromo,
	updatePromo,
} from '../controllers/promo.controller.js';
const router = express.Router();

router.post('/comidas', saveFood);

router.get('/comidas', getFoods);

router.put('/comidas/:id', updateFood);

router.delete('/comidas/:id', deleteFood);

router.post('/bebidas', saveDrink);
router.get('/bebidas', getDrinks);
router.put('/bebidas/:id', updateDrink);
router.delete('/bebidas/:id', deleteDrink);

router.post('/promos', savePromo);
router.get('/promos', getPromos);
router.put('/promos/:id', updatePromo);
router.delete('/promos/:id', deletePromo);

export default router;
