import { RESTDataSource } from 'apollo-datasource-rest';
import { GetHeroResponse } from './types';

export class HeroRESTApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://superheroapi.com/api/4227720160629345'
  }

  getHero(name: string) {
    return this.get<GetHeroResponse>(`/search/${name}`)
  }

}