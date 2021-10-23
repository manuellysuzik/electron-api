import Koa from 'koa';
import koaBody from 'koa-body';
import { API_PORT } from './config';
import { DatabaseConnection } from './config/mongoose';
import { loadSeeds } from './database/seeds/mongo-seed';
const app = new Koa()

app.use(koaBody());
app.use(ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});
DatabaseConnection()
//loadSeeds()

app.listen(API_PORT, () => console.log(`Servidor rodando na porta ${API_PORT}`))
export default app