import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export const helloModule = createModule({
  id: 'hello-module',
  typeDefs,
  resolvers,
})