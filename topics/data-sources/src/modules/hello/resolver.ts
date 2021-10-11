import { HelloModule } from './module-types'

export const resolver: HelloModule.Resolvers = {
  Query: {
    helloGQL: () => 'hello world!'
  }
}