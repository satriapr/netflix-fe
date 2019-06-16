import { testSnapshots } from '../../../utils/test.util'
import Search from '../Search.view'

describe('Search Component', () => {
  testSnapshots(Search, [
    {
      description: 'Search props',
      props: {}
    }
  ])
})
