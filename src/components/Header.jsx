import React from 'react'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import { Link } from 'react-router-dom'

const Container = styled.div`
position: sticky
top: 0
opacity: .95
background: #bccbde
box-sizing: border-box
display: flex
align-items: center
width: 100vw`

const StyledHeader = styled.div`
height: 100px
box-sizing: border-box
background: #bccbde
display: flex
align-items: center
justify-content: space-between
width: 100vw
padding: 50px
z-index: 10`

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

        <Container>
            <StyledHeader className='header'>

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
         </Container>
    )
}