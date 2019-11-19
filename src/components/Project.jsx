import React from 'react'
import { Container, Title, TaskButton, Right } from '../css/styledComponents'
import Task from './Task'

class Project extends React.Component {
    state = {
        tasks : ['fred', 'fred']
    }
    render() {
        const {tasks} = this.state
        return (
            <Container>

                <Title>Project.jsx</Title>

                {/* MAP OUT TASKS FOR EACH PROJECT */}
                {tasks.map(task => (
                    <Task />
                ))}

                <Right>
                    <TaskButton>+</TaskButton>
                </Right>

            </Container>
        )
    }
}

export default Project