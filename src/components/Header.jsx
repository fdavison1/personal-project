import React from 'react'
import { StyledHeader, Title } from '../css/styledComponents'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <StyledHeader>

            <Title>Header.jsx</Title>

            <Link to='/'>
                <button>landing</button>
            </Link>

            <Link to='/login'>
                <button>login</button>
            </Link>

            <Link to='/register'>
                <button>register</button>
            </Link>

            <Link to='/dash'>
                <button>dash</button>
            </Link>

        </StyledHeader>
    )
}