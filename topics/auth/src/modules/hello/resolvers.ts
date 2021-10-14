import { HelloModule } from './module-types'

export const resolvers: HelloModule.Resolvers = {
  Query: {
    helloGQL: () => 'hello world!'
  }
}