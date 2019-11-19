import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../components/Header'

configure({ adapter: new Adapter()})

describe ('Header.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Header/>)

    expect(wrapper.exists()).toBe(true)
  })
})