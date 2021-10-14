export type GetHeroResponse = {
  results: Hero[]
}
type Hero = {
  id: string
  name: string
  powerstats: {
    intelligence: number
    strength: number
    speed: number
    durability: number
    power: number
    combat: number
  }
  appearance: {
    gender: 'Male' | 'Female'
    race: 'Human' | 'Animal'
  }
}