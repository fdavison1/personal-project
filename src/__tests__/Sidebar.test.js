import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
import Sidebar from '../components/Sidebar'
// import renderer from 'react-test-renderer'
import store from '../dux/store'

describe('Sidebar.jsx tests', ()=> {
  it('renders', () => {
    const wrapper = shallow(<Sidebar store={store}/>)

    expect(wrapper.exists()).toBe(true)
  })
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Sidebar store={store}/>).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})