import Router from 'koa-router'
import userRouter from './user-router'

const router = new Router()
const apiRouter = new Router()

apiRouter.use(userRouter)

router.use('/v1', apiRouter.routes())

export default router