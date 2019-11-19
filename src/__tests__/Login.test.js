import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../components/Login'

configure({ adapter: new Adapter()})

describe ('Login.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Login/>)

    expect(wrapper.exists()).toBe(true)
  })
})