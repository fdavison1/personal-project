import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

configure({ adapter: new Adapter() })

describe('App.js tests', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toBe(true)
  })
})



