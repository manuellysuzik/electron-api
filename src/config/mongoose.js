import mongoose from 'mongoose'
import { MONGO_URI } from '../config'

export const DatabaseConnection = async () => {
  const connection = await mongoose.connect(MONGO_URI, () => { console.log('conectado ao banco de dados mongo') })

  return connection
}