import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Sidebar from '../components/Sidebar'
import store from '../dux/store'

describe('Sidebar.jsx tests', ()=> {
  it('renders', () => {
    const wrapper = shallow(<Sidebar store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})