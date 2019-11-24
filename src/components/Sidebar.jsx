import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Content } from '../css/styledComponents'

const SideBar = styled.div`
height: 100vh
background: lightgray
width: 300px
display: flex
flex-direction: column
align-items: center
justify-content: space-between`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default function Sidebar() {
    return (
        <SideBar>

            <div>

            <Content>---username---</Content>

            <Content>all lists</Content>
            <StyledLink to='/'>
            <Content>log out</Content>
            </StyledLink>
            </div>



            

           

        </SideBar>
    )
}