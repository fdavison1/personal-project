import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Register from '../components/Register'
import store from '../dux/store'

describe ('Register.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Register store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})