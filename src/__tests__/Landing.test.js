import React from 'react'
import { shallow } from '../enzyme'
import Landing from '../components/Landing'


describe ('Landing.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Landing/>)

    expect(wrapper.exists()).toBe(true)
  })
})