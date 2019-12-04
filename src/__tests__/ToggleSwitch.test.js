import React from 'react'
import { shallow } from 'enzyme'
import ToggleSwitch from '../components/ToggleSwitch'

describe('ToggleSwitch.jsx', () => {
    it('renders', () => {
        const wrapper = shallow(<ToggleSwitch />)

        expect(wrapper.exists()).toBe(true)
    })
})