import React from 'react'
import { shallow } from 'enzyme'
import '../setupTests'
import Footer from '../components/Footer'


describe ('Footer.jsx', () => {
    it('renders', ()=> {
    
    const wrapper = shallow(<Footer/>)

    expect(wrapper.exists()).toBe(true)
    })
})