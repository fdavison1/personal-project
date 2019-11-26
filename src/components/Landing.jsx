import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'

const Section = styled.div`
border: 1px solid lightgray
border-radius: 3px
background: lightgray
width: 300px
height: 300px
margin: 10px
display: flex
align-items: center
justify-content: center
&:hover {
    background: yellow
    font-weight: 500
}`

const Container = styled.div`
display: flex
justify-content: space-evenly
margin: 0 auto
max-width: 1000px
min-height: 500px
align-items: center
box-sizing: border-box`

const Stripe = styled.div`
min-height: 500px
display: flex
align-items: center
justify-content: center
background: lightgray
box-sizing: border-box`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default function Landing() {
    return (
        <Div>
            <Header />

            <Container>

                <StyledLink to='/register'>
                    <Section>
                        <Title>Register</Title>
                    </Section>
                </StyledLink>


                <StyledLink to='/login'>
                    <Section>
                        <Title>Login</Title>
                    </Section>
                </StyledLink>
            </Container>


            <Stripe>

                <Title>Some info</Title>
            </Stripe>

            <Container>
                <Title>Some info</Title>
            </Container>
            <Stripe>
                <Title>Some info</Title>
            </Stripe>

        </Div>
    )
}