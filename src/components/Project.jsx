import React from 'react'
import { Container, Title, TaskButton, Right } from '../css/styledComponents'
import Task from './Task'

class Project extends React.Component {
    state = {
        tasks : [{
            id: 1,
            content: 'task-1',
            index: 1
        },
        {
            id: 2,
            content: 'task-2',
            index: 2
        }]
    }
    render() {
        const {tasks} = this.state
        const {projectObj} = this.props
        return (
            <Container>

                <Title>{projectObj.title}</Title>

                {/* MAP OUT TASKS FOR EACH PROJECT */}
                {tasks.map(task => (
                    <Task 
                    taskObj = {task}/>
                ))}

                <Right>
                    <TaskButton>+</TaskButton>
                </Right>

            </Container>
        )
    }
}

export default Project