import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ToggleSwitch from '../components/ToggleSwitch'

describe('ToggleSwitch.jsx', () => {
    it('renders', () => {
        const wrapper = shallow(<ToggleSwitch />)

        expect(wrapper.exists()).toBe(true)
    })
    it('matches snapshot', () => {
        const tree = renderer.create(<ToggleSwitch />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})