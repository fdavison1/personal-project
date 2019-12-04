import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import '../setupTests'
// import renderer from 'react-test-renderer'
import App from '../App'

describe('App.js tests', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toBe(true)
  })
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<App />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})



