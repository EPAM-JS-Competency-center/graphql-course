import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export const authModule = createModule({
  id: 'auth-module',
  typeDefs,
  resolvers,
})