import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
    intelligence: Int!
    strength: Int!
    power: Int!
    combat: Int!
  }
  
  type EnduranceStats implements Stats {
    intelligence: Int!
    strength: Int!
    speed: Float!
    durability: Int!
  }
`