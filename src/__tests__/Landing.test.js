import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Landing from '../components/Landing'


describe ('Landing.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Landing/>)

    expect(wrapper.exists()).toBe(true)
  })
})