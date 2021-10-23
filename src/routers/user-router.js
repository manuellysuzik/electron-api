import Router from 'koa-router';
import userController from '../controllers/user-controller'
routes = new Router()

routes.post('/signup', userController.create)