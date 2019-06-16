import CategoryArrow from '../CategoryArrow.view'
import { testSnapshots } from '../../../utils/test.util'

describe('CategoryArrow Component', () => {
  testSnapshots(CategoryArrow, [
    {
      description: 'CategoryArrow props',
      props: {
        text: '<',
        className: 'arrow-prev'
      }
    }
  ])
})
