import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';
import dotenv from 'dotenv'

import { helloModule, heroesModule } from './modules';
import {HeroRESTApi, MongoDB} from './dataSources';
import {MongoClient} from 'mongodb';

dotenv.config()

const port = 4000
const path = '/api'

const client = new MongoClient(process.env.DB_URI as string)

client.connect(err => {
  if(err) {
    client.close()
    // falldown gracefully
  } else {
    const app = express()

    const schema = createApplication({
      modules: [helloModule, heroesModule]
    }).createSchemaForApollo()
    const server = new ApolloServer({
      schema,
      dataSources: () => ({
        HeroRESTApi: new HeroRESTApi(),
        HeroBiographies: new MongoDB(client.db().collection('biography'))
      })
    })

    server.applyMiddleware({ app, path })
    app.listen({ port }, () => {
      console.info(`server is listening at http://localhost:${port}${server.graphqlPath}`)
    })
  }
})

