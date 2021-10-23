import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, "../.env")
})

export const API_PORT = process.env.API_PORT
export const MONGO_URI = process.env.MONGO_URI