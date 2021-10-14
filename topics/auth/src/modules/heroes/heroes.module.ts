import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import {checkAuth} from '../../middlewares';

export const heroesModule = createModule({
  id: 'heroes-module',
  typeDefs,
  middlewares: {
    Query: {
      searchHero: [checkAuth]
    },
  },
  resolvers,
})