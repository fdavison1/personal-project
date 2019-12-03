import React from 'react'
import styled from 'styled-components'
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
justify-content: space-between
@media (max-width: 500px){
    width: 150px
}`

const MobileTitle = styled.div`
display: none
@media (max-width: 1025px){
    display: inline
}
`

export const LogoTitle = styled.p`
  font-size: 3rem
  font-weight: 200
  margin: 0
  @media (max-width: 1025px){
    display: none
}`

export const Title = styled.p`
  font-size: 3rem
  font-weight: 200
  margin: 0
  @media (max-width: 1025px){
    font-size: 2rem
}
@media (max-width: 500px){
    font-size: 1.5rem
}`

export default function Header() {

    return (

        <Container>
            <StyledHeader className='header'>

                <StyledLink to='/'>

                    <LogoTitle><i class="fas fa-stream"></i> List App</LogoTitle>
                    <MobileTitle><i class="fas fa-stream"></i></MobileTitle>
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