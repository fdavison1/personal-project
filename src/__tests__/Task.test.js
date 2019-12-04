import React from 'react'
import { shallow } from '../enzyme'
import Task from '../components/Task'


describe('Task.jsx tests', ()=> {
    test('renders', () => {
        const wrapper = shallow(<Task task/>)

        expect(wrapper.exists()).toBe(true)
    })
})