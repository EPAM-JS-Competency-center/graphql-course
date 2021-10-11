import { HeroesModule } from './module-types'
import {getBiographyById } from './response';
import camelcaseKeys from 'camelcase-keys';

export const resolver: HeroesModule.Resolvers = {
  Query: {
    searchHero: async (parent, { name }, { dataSources }) => {
      try {
        const heroes = await dataSources.HeroRESTApi.getHero(name)
        return heroes.results
      } catch(e) {
        console.warn(e)
        return []
      }
    }
  },
  Hero: {
    biography: (parent, args, context, info) => {
      // But what if the heroes are too much & they have duplicates? => duplicate requests => N + 1 problem
      const biography = getBiographyById(parent.id)
      return biography ? camelcaseKeys(biography) : null
    }
  },
}