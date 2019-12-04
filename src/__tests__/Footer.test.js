import React from 'react'
import { shallow } from '../enzyme'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Footer, { Stripe } from '../components/Footer'


describe ('Footer.jsx', () => {
    it('renders', ()=> {
    
    const wrapper = shallow(<Footer/>)

    expect(wrapper.exists()).toBe(true)
    })
    it('matches snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Footer css', () => {
        const tree = renderer.create(<Stripe />).toJSON()
        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('background', '#c2dde6')
    })
})