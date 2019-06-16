import CategoryList from '../CategoryList.view'
import { testSnapshots } from '../../../utils/test.util'

describe('CategoryList Component', () => {
  testSnapshots(CategoryList, [
    {
      description: 'CategoryList props',
      props: {}
    }
  ])
})
