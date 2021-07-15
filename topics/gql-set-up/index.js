import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    helloGQL: String!
  }
`

const resolvers = {
  Query: {
    helloGQL: () => 'hello world!'
  }
}

const port = 4000
const path = '/api'

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app, path })
app.listen({ port }, () => {
  console.info(`server is listening at http://localhost:${port}${server.graphqlPath}`)
})