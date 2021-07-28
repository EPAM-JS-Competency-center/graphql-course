import { HeroesModule } from './module-types'
import { getHeroes } from './response';
import camelcaseKeys from 'camelcase-keys';

export const resolver: HeroesModule.Resolvers = {
  Query: {
    searchHero: (parent, args) => (
      getHeroes().map(hero => ({
        ...hero,
        ...(hero?.biography ? { biography: camelcaseKeys(hero.biography)} : {})
      })).filter(hero => hero.name === args.name || !args.name)
    )
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
  }
}