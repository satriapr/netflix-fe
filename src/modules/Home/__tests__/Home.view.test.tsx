import Home from '../Home.view'
import { testSnapshots } from '../../../utils/test.util'

describe('Home Component', () => {
  testSnapshots(Home, [
    {
      description: 'Home props',
      props: {}
    }
  ])
})
