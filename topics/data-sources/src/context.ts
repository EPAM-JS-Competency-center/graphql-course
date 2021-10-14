import { HeroRESTApi, MongoDB } from './dataSources';

export type Context = {
  dataSources: {
    HeroRESTApi: HeroRESTApi
    HeroBiographies: MongoDB
  }
}