import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Project from '../components/Project'

configure({ adapter: new Adapter()})

// beforeEach(()=> {
//   wrapper = shallow(<Project/>)
// })

describe ('Project.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Project projectObj/>)

    expect(wrapper.exists()).toBe(true)
  })
})