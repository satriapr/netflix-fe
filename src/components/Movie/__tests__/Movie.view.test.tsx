import Movie from '../Movie.view'
import { testSnapshots } from '../../../utils/test.util'

describe('Movie Component', () => {
  testSnapshots(Movie, [
    {
      description: 'Movie props',
      props: {
        Title: 'Running Man',
        imdbID: '123123',
        Poster: ''
      }
    }
  ])
})
