import { HeroesModule } from './module-types'
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
    biography: async (parent, args, { dataSources }, info) => {
      const biography = await dataSources.HeroBiographies.getBiographyById(parent.id)
      return biography ? camelcaseKeys(biography) : null
    }
  },
}