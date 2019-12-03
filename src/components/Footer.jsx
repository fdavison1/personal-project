import React from 'react'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import linked from '../assets/In.png'
import github from '../assets/25231.png'

const Stripe = styled.div`
display: flex
flex-direction: column
align-items: center
background: #c2dde6
box-sizing: border-box`

const Container = styled.div`
padding: 50px
display: flex
max-width: 1200px
margin: 0 auto
padding-top: 50px
box-sizing: border-box
flex-direction: column`

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
        {/* <Container>
            <Title>about</Title>
            <p>
                Fred Davison, DevMountain student. 
            </p>
        </Container> */}

        <Foot>

        <Paragraph>
        Fred Davison, DevMountain Student 2019
        </Paragraph>

        <LogoBox>
            <FootLogo src={linked} alt="linkedIn logo"/>
            <FootLogo src={github} alt="github logo"/>
        </LogoBox>


        </Foot>

    </Stripe>
    )
}