import { shallow } from 'enzyme'
import * as React from 'react'

const singleSnapTest = (wrapper, description) => {
  test(description, () => {
    expect(wrapper).toMatchSnapshot()
  })
}

interface IConfig {
  props: object
  description: string
  state?: object
}

const testSnapshots = (Component, configs: IConfig[]) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const { props, description, state } = config
      const wrapper = shallow(<Component {...props} />)
      if (state) wrapper.setState(state)
      singleSnapTest(wrapper, description)
    })
  })
}

export { testSnapshots }
