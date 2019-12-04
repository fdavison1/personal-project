import React from 'react'
import { shallow } from '../enzyme'
import Sidebar from '../components/Sidebar'
import store from '../dux/store'

describe('Sidebar.jsx tests', ()=> {
  it('renders', () => {
    const wrapper = shallow(<Sidebar store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})