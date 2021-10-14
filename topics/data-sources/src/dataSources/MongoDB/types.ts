import { ObjectId } from 'mongodb';

export type Biography = {
  _id: ObjectId
  heroId: string
  'full-name': string
  'place-of-birth': string
}