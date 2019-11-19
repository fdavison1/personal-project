import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Register from '../components/Register'

configure({ adapter: new Adapter()})

describe ('Register.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Register/>)

    expect(wrapper.exists()).toBe(true)
  })
})