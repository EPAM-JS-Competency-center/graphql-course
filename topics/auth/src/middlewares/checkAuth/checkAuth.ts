import {Middleware} from 'graphql-modules';
import {Context} from '../../context';

export const checkAuth: Middleware = (event, next) => {
  const { context } = event as unknown as { context: Context}
  if(!context.user) {
    throw new Error('Access forbidden')
  }
  return next()
}