import React from 'react'
import { shallow } from '../enzyme'
import Project from '../components/Project'
import store from '../dux/store'


describe ('Project.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Project store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})