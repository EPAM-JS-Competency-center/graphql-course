import { DataSource } from 'apollo-datasource';
import { Biography } from './types';
import {Collection} from 'mongodb';
import DataLoader from 'dataloader';

export class MongoDB extends DataSource {
  collection: Collection<Biography>

  constructor(collection: Collection<Biography>) {
    super();
    this.collection = collection
  }

  private biographyLoader = new DataLoader(async(ids: readonly string[]) => {
    const list = await this.collection.find({
      "heroId": {"$in": ids}
    }).toArray();
    return ids.map(id => list.find(({ heroId }) => heroId === id))
  })

  getBiographyById(heroId: string) {
    return this.biographyLoader.load(heroId)
  }

}