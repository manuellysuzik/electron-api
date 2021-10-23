
import User from "../models/user-model";
import bcrypt from 'bcrypt'

const { hashSync } = bcrypt

export const userSeed = async () =>
  User.create({
    email: "electron-user@emai.com",
    password: hashSync("electron123", 6),
    nickname: 'electron'
  })
