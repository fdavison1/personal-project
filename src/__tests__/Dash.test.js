import React from 'react'
import { shallow } from '../enzyme'
import Dash from '../components/Dash'


describe('Dash.jsx tests', () => {
  it('render', () => {
    const wrapper = shallow(<Dash/>)

    expect(wrapper.exists()).toBe(true)
  })
})