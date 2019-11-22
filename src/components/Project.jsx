import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import Task from './Task'


const Container = styled.div`
border: 1px solid lightgray
border-radius: 3px
margin: 8px
min-width: 500px
max-width: 100px`
const Title = styled.h3`
font-family: sans-serif
margin: 3px
font-size: 3rem
font-weight: 200`
const TaskList = styled.div`
font-weight: 200`


export default class Project extends React.Component {
    state = {

    }
    render() {
        const { tasks } = this.props
        return (

            <Droppable droppableId={this.props.project.droppable_id}>
                {(provided) => (
                    <Container>

                        <Title>{this.props.project.title}</Title>

                        {/* ADD BUTTON */}
                        <button
                        onClick={() => this.props.addButton()}
                        >add
                        </button>

                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >

                            {tasks.map((task, index) => <Task key={task.task_id} task={task} index={index} tasks={tasks} />)}
                            {provided.placeholder}
                        </TaskList>

                    </Container>
                )}
            </Droppable>
        )
    }
}