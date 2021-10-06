import { gql } from 'apollo-server-express';
import { sharedEndurance, sharedPower } from './shared-templates';

const template = `
  extend type Query {
    searchHero(name: String): [Hero!]!
  }
  
  type Hero {
    id: ID!
    name: String!
    basestats: BaseStats!
    biography: Biography
    appearance: Appearance
  }
  
  type Appearance {
    gender: Gender
    race: Race
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
  
  union BaseStats = PowerStats | EnduranceStats
  
  interface Stats {
    intelligence: Int!
    strength: Int!
  }
  
  type PowerStats implements Stats {
    ${sharedPower}
  }
  
  type EnduranceStats implements Stats {
    ${sharedEndurance}
  }
  
  type Mutation {
    addHero(name: String!, endurance: EnduranceStatsInput, power: PowerStatsInput): Boolean!
    addHeroByPower(name: String!, power: PowerStatsInput!): Boolean!
    addHeroByEndurance(name: String!, endurance: EnduranceStatsInput!): Boolean!
  }
  
  input EnduranceStatsInput {
    ${sharedEndurance}
  }
  
  input PowerStatsInput {
    ${sharedPower}
  }
`

export const typeDefs = gql(template)