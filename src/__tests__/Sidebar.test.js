import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../components/Sidebar'

configure({ adapter: new Adapter()})

describe('Sidebar.jsx tests', ()=> {
  it('renders', () => {
    const wrapper = shallow(<Sidebar/>)

    expect(wrapper.exists()).toBe(true)
  })
})