import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Task from '../components/Task'

configure({adapter: new Adapter() })

describe('Task.jsx tests', ()=> {
    test('renders', () => {
        const wrapper = shallow(<Task taskObj/>)

        expect(wrapper.exists()).toBe(true)
    })
})