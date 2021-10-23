import User from '../database/models/user-model'
import bcrypt from 'bcrypt'

export const create = async (ctx) => {
  const body = ctx.body

  console.log(body)

  const user = await User.create({
    email: body.email,
    password: bcrypt.hash(body.password, 8),
    nickname: body.nickname
  })
  return user
}


export default { create }