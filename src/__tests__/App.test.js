import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

configure({ adapter: new Adapter() })

describe('App.js tests', () => {
  test('renders', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toBe(true)
  })
})



//placeholder test
test('2 equals 2', ()=> {
  expect(2).toBe(2)
})


