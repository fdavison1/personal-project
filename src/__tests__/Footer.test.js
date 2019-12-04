import React from 'react'
import { shallow } from '../enzyme'
import renderer from 'react-test-renderer'
import Footer from '../components/Footer'


describe ('Footer.jsx', () => {
    it('renders', ()=> {
    
    const wrapper = shallow(<Footer/>)

    expect(wrapper.exists()).toBe(true)
    })
    it('matches snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})