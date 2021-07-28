import { createModule } from 'graphql-modules';
import { resolver } from './resolver';
import { typeDefs } from './schema';

export const heroesModule = createModule({
  id: 'heroes-module',
  typeDefs,
  resolvers: {
    ...resolver,
  }
})