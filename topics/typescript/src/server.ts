import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';

import { helloModule } from './modules';

const port = 4000
const path = '/api'

const app = express()

const schema = createApplication({
  modules: [helloModule]
}).createSchemaForApollo()
const server = new ApolloServer({
  schema,
})

server.applyMiddleware({ app, path })
app.listen({ port }, () => {
  console.info(`server is listening at http://localhost:${port}${server.graphqlPath}`)
})