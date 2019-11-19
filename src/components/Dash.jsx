import React from 'react'
import { DashContainer, DashDisplay, Title } from '../css/styledComponents'
import Project from './Project'
import Sidebar from './Sidebar'

export default function Dash() {
    return (
        <DashContainer>

            <div>
                <Sidebar />
            </div>


            <DashDisplay>
                <Title>Dash.jsx</Title>
                <Project />
            </DashDisplay>

        </DashContainer>
    )
}