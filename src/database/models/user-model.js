import mongoose from 'mongoose';

const { Schema, model } = mongoose

const User = new Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  nickname: String

})
const user = model('Users', User)

export default user