import { testSnapshots } from '../../../utils/test.util'
import Header from '../Header.view'

describe('Header Component', () => {
  testSnapshots(Header, [
    {
      description: 'Header props',
      props: {}
    }
  ])
})
