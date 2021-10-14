import jwt from 'jsonwebtoken'

import { HeroRESTApi, MongoDB } from './dataSources';
import {ExpressContext} from 'apollo-server-express';
import {User} from './modules';

export type Context = Pick<ExpressContext, 'req'| 'res'> & {
  dataSources: {
    HeroRESTApi: HeroRESTApi
    HeroBiographies: MongoDB
  },
  user: User
}

export const context = async ({ req, res }: ExpressContext) => {
  const context = {
    req,
    res,
  }
  let user
  try {
    const token = req.cookies?.token
    if(token) {
      user = jwt.verify(token, `${process.env.AUTH_SECRET}`)
    }
    return {
      ...context,
      user
    }
  } catch(e) {
    return context
  }
}