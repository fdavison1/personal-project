import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Project from '../components/Project'
import store from '../dux/store'


// beforeEach(()=> {
//   wrapper = shallow(<Project/>)
// })

describe ('Project.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Project store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
})