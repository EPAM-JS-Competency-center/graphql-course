import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthModule } from './module-types'

import { users } from './users'

export const resolvers: AuthModule.Resolvers = {
  Mutation: {
    login: async (_, { email, password }, { res }) => {
      const user = users.find(user => user.email === email)

      if(!user) {
        throw new Error('User not found')
      }

      const match = bcrypt.compare(user.password, password)
      if(!match) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({
        email: user.email, id: user.id
      }, `${process.env.AUTH_SECRET}`)

      res.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 1,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      return user.email
    }
  }
}