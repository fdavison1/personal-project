import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Dash from '../components/Dash'

describe('Dash.jsx tests', () => {
  test('render', () => {
    const wrapper = shallow(<Dash/>)

    expect(wrapper.exists()).toBe(true)
  })
})