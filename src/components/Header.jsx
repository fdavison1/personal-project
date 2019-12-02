import React from 'react'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
box-sizing: border-box
background: #bccbde
height: 200px
display: flex
align-items: center
justify-content: space-between
padding: 50px`

const StyledLink = styled(Link)`
transition: all 1s ease
font-size: 3rem
font-weight: 200
text-decoration: none
color: black
&:focus, , 
&:visited, 
&:link, 
&:active {
    text-decoration: none;
}
&:hover {
        color: white
}
`
const Nav = styled.div`
display: flex
width: 300px
justify-content: space-between`

export default function Header() {
    return (
        <StyledHeader>

            <StyledLink to='/'>
            
                <Title><i class="fas fa-stream"></i> List App</Title>
            </StyledLink>

            <Nav>
                <StyledLink to='/register'>
                    <Title>Register</Title>
                </StyledLink>
                <StyledLink to='/login'>
                    <Title>Login</Title>
                </StyledLink>
            </Nav>


        </StyledHeader>
    )
}