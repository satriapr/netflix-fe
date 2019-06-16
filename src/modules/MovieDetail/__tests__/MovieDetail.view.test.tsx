import MovieDetail from '../MovieDetail.view'
import { testSnapshots } from '../../../utils/test.util'

describe('MovieDetail Component', () => {
  testSnapshots(MovieDetail, [
    {
      description: 'MovieDetail props',
      props: {
        match: {
          params: {
            id: '123'
          }
        }
      }
    }
  ])
})
