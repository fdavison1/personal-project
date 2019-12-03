import React from 'react'
import styled from 'styled-components'
import linked from '../assets/In.png'
import github from '../assets/25231.png'

const Stripe = styled.div`
display: flex
position: relative
bottom: 0
flex-direction: column
align-items: center
background: #c2dde6
box-sizing: border-box
position: absolute
width: 100%
height: 100px`


const Foot = styled.div`
margin: 10px
padding: 0 50px
height: 100px
box-sizing: border-box
display: flex
align-items: center
justify-content: space-between
width: 1100px`

const FootLogo = styled.img`
height: 50px
margin: 0 10px`

const LogoBox = styled.div`
display: flex
align-items: center`

const Paragraph = styled.p`
font-size: 1.2rem
font-weight: 200
`

export default function Footer(){
    return (
        <Stripe>

        <Foot>

        <Paragraph>
        <span>Fred Davison</span> DevMountain Student 2019
        </Paragraph>

        <LogoBox>
            <FootLogo src={linked} alt="linkedIn logo"/>
            <FootLogo src={github} alt="github logo"/>
        </LogoBox>


        </Foot>

    </Stripe>
    )
}