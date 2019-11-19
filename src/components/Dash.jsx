import React from 'react'
import { DashContainer, DashDisplay} from '../css/styledComponents'
import Project from './Project'
import Sidebar from './Sidebar'

export default function Dash() {
    return (
        <DashContainer>

            <div>
                <Sidebar />
            </div>


            <DashDisplay>
                <Project />
            </DashDisplay>
ß
        </DashContainer>
    )
}