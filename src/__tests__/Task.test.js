import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Task from '../components/Task'

configure({adapter: new Adapter() })

//placeholder test

describe('placeholder tests', () => {
    test('2 equals 2', ()=> {
        expect(2).toBe(2)
    })
    
    it ('3 equals 3', () => {
        expect(3).toBe(3)
    })
})

describe('Task.jsx tests', ()=> {
    test('renders', () => {
        const wrapper = shallow(<Task/>)

        expect(wrapper.exists()).toBe(true)
    })
})