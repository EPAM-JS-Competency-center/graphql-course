import { HeroesModule } from './module-types';

type ResponseHero = Omit<HeroesModule.Hero, 'biography'> & {
  biography?: {
    'full-name': string
    'place-of-birth': string
  }
}

const response: ResponseHero[] = [
  {
    id: '69',
    name: 'Batman',
    basestats: {
      intelligence: 81,
      strength: 40,
      power: 63,
      combat: 90
    },
    biography: {
      'full-name': 'Bruce Wayne',
      'place-of-birth': 'Gotham City, 25th Century',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
    },
  },
  {
    id: '165',
    name: 'Catwoman',
    basestats: {
      intelligence: 69,
      strength: 11,
      speed: 33.85,
      durability: 28,
    },
    biography: {
      'full-name': 'Selina Kyle',
      'place-of-birth': 'Gotham City',
    },
    appearance: {
      gender: 'Female',
      race: 'Human',
    },
  }
]

export const getHeroes = () => response
export const addHero = (hero: ResponseHero) => response.push(hero)