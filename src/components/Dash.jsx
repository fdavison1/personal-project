import React from 'react'
import { DashContainer, DashDisplay } from '../css/styledComponents'
import Project from './Project'
import Sidebar from './Sidebar'

class Dash extends React.Component {
    state = {
        projects: [{
            id: 1,
            title: 'project-1',
            index: 1
        }]
    }
    render() {
        const { projects}  = this.state

        return (
            <DashContainer>

                <div>
                    <Sidebar />
                </div>


                <DashDisplay>
                    
                {/* MAP OUT PROJECTS */}
                {projects.map(project => (
                    <Project 
                    projectObj = {project}
                    key={project.id}
                    />
                ))}

                </DashDisplay>

            </DashContainer>
        )
    }
}

export default Dash