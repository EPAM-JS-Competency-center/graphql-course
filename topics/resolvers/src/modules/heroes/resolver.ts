import { HeroesModule } from './module-types'
import {addHero, getBiographyById, getHeroes} from './response';
import camelcaseKeys from 'camelcase-keys';
import { GraphQLError } from 'graphql';
import { v4 as uuidv4 } from 'uuid'

export const resolver: HeroesModule.Resolvers = {
  Query: {
    searchHero: (parent, args) => (
      getHeroes()
        .filter(hero => hero.name === args.name || !args.name)
    )
  },
  Hero: {
    biography: (parent, args, context, info) => {
      // But what if the heroes are too much & they have duplicates? => duplicate requests => N + 1 problem
      const biography = getBiographyById(parent.id)
      return biography ? camelcaseKeys(biography) : null
    }
  },
  PowerStats: {
    __isTypeOf(parent) {
      return Boolean(parent.power)
    }
  },
  EnduranceStats: {
    __isTypeOf(parent) {
      return Boolean(parent.intelligence)
    }
  },
  Mutation: {
    addHero: (parent, { name, power, endurance }) => {
      if(Boolean(power) === Boolean(endurance)) {
        throw new GraphQLError('Specify either power or endurance!')
      }
      const stats = power || endurance
      addHero({
        name,
        basestats: stats!,
        id: uuidv4(),
      })
      return true
    },
    addHeroByPower: (parent, { name, power }) => {
      addHero({
        name,
        basestats: power,
        id: uuidv4(),
      })
      return true
    },
    addHeroByEndurance: (parent, { name, endurance }) => {
      addHero({
        name,
        basestats: endurance,
        id: uuidv4(),
      })
      return true
    }
  }
}