import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'

const Section = styled.div`
font-size: 3rem
font-weight: 200
font-color: #262626
transition: all 0.75s ease
border: 1px solid #999999
border-radius: 10px
background: lightgray
width: 300px
height: 300px
margin: 10px
display: flex
align-items: center
justify-content: center
&:hover {
    background: #ffdc6a
    font-weight: 400
    border: 2px solid #999999
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
                    <Section>Register</Section>
                </StyledLink>


                <StyledLink to='/login'>
                    <Section>Login</Section>
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