import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dash from '../components/Dash'

configure({ adapter: new Adapter()})

describe('Dash.jsx tests', () => {
  test('render', () => {
    const wrapper = shallow(<Dash/>)

    expect(wrapper.exists()).toBe(true)
  })
})