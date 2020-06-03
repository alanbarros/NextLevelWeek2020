import express, { response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);

export default routes;