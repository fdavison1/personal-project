import React from 'react'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
background: #bccbde
height: 200px
display: flex
align-items: center
justify-content: center`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default function Header() {
    return (
        <StyledHeader>

            <StyledLink to='/'>
            <Title>Header</Title>
            </StyledLink>

        </StyledHeader>
    )
}