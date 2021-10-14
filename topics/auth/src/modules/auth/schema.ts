import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Mutation {
    login(email: String!, password: String!): String!
  }
`