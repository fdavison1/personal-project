import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'

const Section = styled.div`
border: 1px solid lightgray
border-radius: 3px
background: lightgray
width: 600px
height: 300px
display: flex
align-items: center
justify-content: center
margin: 100px auto
flex-direction: column
`

const StyledSpan = styled.span`
font-size: 1.5rem
font-weight: 200`

export default function Login() {
    return (
        <Div>

            <Header />

            <Section>
            <Title>Login</Title>
            <br/>
            
            <div>
            <StyledSpan>Username: </StyledSpan><input type="text"/>
            </div>
            <br/>
           
            <div>
            <StyledSpan>Password: </StyledSpan><input type="text"/>
            </div>
            
            <br/>


            <Link to='/dash'>
                <button>dash</button>
            </Link>
           
            </Section>

        </Div>
    )
}