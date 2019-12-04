import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
// import renderer from 'react-test-renderer'
import Header from '../components/Header'

describe ('Header.jsx tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Header/>)

    expect(wrapper.exists()).toBe(true)
  })
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Header />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})