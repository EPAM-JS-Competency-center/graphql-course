import { createModule } from 'graphql-modules';
import { resolver } from './resolver';
import { typeDefs } from './schema';

export const helloModule = createModule({
  id: 'hello-module',
  typeDefs,
  resolvers: {
    ...resolver,
  }
})