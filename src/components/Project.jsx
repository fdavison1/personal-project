import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px
border: 1px solid lightgray
border-radius: 2px
display: flex
flex-direction: column
background: white`
const Title = styled.p`
padding: 0 8px
font-size: 1.2rem`
const TaskList = styled.div`
padding: 8px
transition: background-color 0.2s ease
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')}
flex-grow: 1`

export default class Project extends React.Component {
    state = {}
    render() {
        return (
            <Draggable draggableId={this.props.project.id} index={this.props.index}>
                {(provided) => (
                <Container
                    {...provided.draggableProps}
                    ref = {provided.innerRef}
                >
                    <Title
                        {...provided.dragHandleProps}
                        type = 'task'
                    >{this.props.project.title}</Title>

                    <Droppable droppableId={this.props.project.id}>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                        
                    </Droppable>
                </Container>
                )}
            </Draggable>

        )
    }
}