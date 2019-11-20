import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Project from './Project'

const Container = styled.div`
display: flex`

const ProjectContainer = styled.div`
display: flex
flex-direction: column`

class Dash extends React.Component {
    state = {
        projects: {
            'project-1': {
                id: 'project-1',
                title: 'project-1',
                taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
            },
            'project-2': {
                id: 'project-2',
                title: 'project-2',
                taskIds: ['task-5']
            },
            'project-3': {
                id: 'project-3',
                title: 'project-3',
                taskIds: ['task-6']
            },
        },
        projectOrder: ['project-1', 'project-2', 'project-3'],
        tasks: {
            'task-1': { id: 'task-1', content: 'take out the garbage' },
            'task-2': { id: 'task-2', content: 'walk the cat' },
            'task-3': { id: 'task-3', content: 'charge phone' },
            'task-4': { id: 'task-4', content: 'cook dinner' },
            'task-5': { id: 'task-5', content: 'wash the dishes' },
            'task-6': { id: 'task-6', content: 'laundry' }
        }
    }


    onDragEnd = result => {
        document.body.style.color = 'inherit'
        document.body.style.backgroundColor = 'inherit'
        const { destination, source, draggableId, type } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        if (type === 'project') {
            const newProjectOrder = Array.from(this.state.projectOrder)
            newProjectOrder.splice(source.index, 1)
            newProjectOrder.splice(destination.index, 0, draggableId)

            const newState = {
                ...this.state,
                projectOrder: newProjectOrder
            }
            this.setState(newState)
            return
        }

        const start = this.state.projects[source.droppableId]
        const finish = this.state.projects[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newProject = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                ...this.state,
                projects: {
                    ...this.state.projects,
                    [newProject.id]: newProject
                }
            }

            this.setState(newState)
            return
        }
        //moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }
        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }
        const newState = {
            ...this.state,
            projects: {
                ...this.state.projects,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }

        }
        this.setState(newState)
    }


    render() {
        return (
            <Container>

                <Sidebar />


                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable droppableId='all-projects' type='project'>
                        {(provided) => (
                            <ProjectContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >

                                {this.state.projectOrder.map((projectId, index) => {
                                    const project = this.state.projects[projectId]
                                    const tasks = project.taskIds.map((taskId) => this.state.tasks[taskId])

                                    return (<Project key={project.id} project={project} tasks={tasks} index={index} />)
                                })}
                                {provided.placeholder}

                            </ProjectContainer>
                        )}
                    </Droppable>
                </DragDropContext>
            </Container>
        )
    }
}

export default Dash
