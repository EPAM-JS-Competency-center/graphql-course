import { HeroesModule } from './module-types';

type Biography = {
  id: string
  'full-name': string
  'place-of-birth': string
}

type ResponseHero = Omit<HeroesModule.Hero, 'biography'>

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
    appearance: {
      gender: 'Female',
      race: 'Human',
    },
  }
]

const biographies: Biography[] = [
  {
    id: '69',
    'full-name': 'Bruce Wayne',
    'place-of-birth': 'Gotham City, 25th Century',
  },
  {
    id: '165',
    'full-name': 'Selina Kyle',
    'place-of-birth': 'Gotham City',
  }
]
export const getHeroes = () => response
export const addHero = (hero: ResponseHero) => response.push(hero)
export const getBiographyById = (heroId: string) => biographies.find(({id}) => heroId === id ) || null