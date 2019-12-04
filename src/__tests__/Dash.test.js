import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
// import renderer from 'react-test-renderer'
import Dash from '../components/Dash'
// import store from '../dux/store'

describe('Dash.jsx tests', () => {
  it('render', () => {
    const wrapper = shallow(<Dash/>)

    expect(wrapper.exists()).toBe(true)
  })
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Dash store />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})