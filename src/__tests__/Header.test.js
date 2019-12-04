import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Header from '../components/Header'

describe ('Header.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Header/>)

    expect(wrapper.exists()).toBe(true)
  })
})