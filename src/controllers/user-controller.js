import userModel from '../database/models/user-model'
import bcrypt from 'bcrypt'

export const create = (ctx) => {
  const { body } = ctx

  return userModel.create({
    email: body.email,
    password: bcrypt.hash(body.password, 8),
    nickname: body.nickname
  })

}


export default { create }