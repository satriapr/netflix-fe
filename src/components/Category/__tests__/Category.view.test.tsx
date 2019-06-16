import Category from '../Category.view'
import { testSnapshots } from '../../../utils/test.util'

describe('Category Component', () => {
  testSnapshots(Category, [
    {
      description: 'Category props',
      props: {
        keyword: 'man',
        type: 'movie',
        categoryTitle: 'Popular on Netflix'
      }
    }
  ])
})
