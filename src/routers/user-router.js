import Router from 'koa-router';
import userController from '../controllers/user-controller'

const router = new Router()

router.post('/signup', userController.create)


export default router.routes()