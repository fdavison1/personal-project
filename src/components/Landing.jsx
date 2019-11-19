import React from 'react'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'
import landingRoutes from '../utils/landingRoutes'

export default function Landing() {
    return (
        <Div>
            <Header/>
            <Title>Landing.jsx</Title>
            {landingRoutes}

        </Div>
    )
}