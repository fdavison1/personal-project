import React from 'react'
import { shallow } from '../enzyme'
import Register from '../components/Register'
import store from '../dux/store'

describe ('Register.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Register store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})