import React from 'react'
import { shallow } from '../enzyme'
import Login from '../components/Login'
import store from '../dux/store'


describe ('Login.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Login store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})