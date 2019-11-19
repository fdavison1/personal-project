import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Landing from '../components/Landing'

configure({ adapter: new Adapter()})

describe ('Landing.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Landing/>)

    expect(wrapper.exists()).toBe(true)
  })
})