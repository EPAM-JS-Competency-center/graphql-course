type Biography = {
  id: string
  'full-name': string
  'place-of-birth': string
}

const biographies: Biography[] = [
  {
    id: '69',
    'full-name': 'Terry McGinnis',
    'place-of-birth': 'Gotham City, 25th Century',
  },
  {
    id: '70',
    'full-name': 'Bruce Wayne',
    'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
  },
  {
    id: '71',
    'full-name': 'Dick Grayson',
    'place-of-birth': '-',
  }
]
export const getBiographyById = (heroId: string) => biographies.find(({id}) => heroId === id ) || null