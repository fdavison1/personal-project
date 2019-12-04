import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import App from '../App'

describe('App.js tests', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toBe(true)
  })
})



