import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConncetionController from './controllers/ConnectionController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConncetionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);


export default routes;