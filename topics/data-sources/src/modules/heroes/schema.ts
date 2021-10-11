import { gql } from 'apollo-server-express';
import { sharedEndurance, sharedPower } from './shared-templates';

const template = `
  extend type Query {
    searchHero(name: String!): [Hero]!
  }
  
  type Hero {
    id: ID!
    name: String!
    powerstats: PowerStats!
    biography: Biography
    appearance: Appearance!
  }
  
  type Appearance {
    gender: Gender!
    race: Race!
  }
  
  enum Gender {
    Male
    Female
  }
  
  enum Race {
    Human
    Animal
  }
  
  type Biography {
    fullName: String
    placeOfBirth: String
  }
  
  interface Stats {
    intelligence: Int!
    strength: Int!
  }
  
  type PowerStats implements Stats {
    ${sharedPower}
    ${sharedEndurance}
  }
`

export const typeDefs = gql(template)