import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import Project from './Project'
import Sidebar from './Sidebar'
import TrashCan from './TrashCan'

const Container = styled.div`
display: flex`



export default class Dash extends React.Component {
    state = {
        tasks: [],
        taskOrder: [],
        projects: []
    }


    //INITIAL RENDER--------------------------------------------------------------------------
    componentDidMount() {
        this.getTaskOrder()
        this.getProjects()
        this.getTasks()
    }
    getTasks() {
        axios.get('/api/tasks')
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })

    }
    getTaskOrder() {
        axios.get('/api/taskOrder').then(res => {

            const newTaskOrder = []
            for (let i = 0; i < res.data.length; i++) {
                newTaskOrder.push(res.data[i].task_id)
            }
            this.setState({
                taskOrder: newTaskOrder
            })

        })
    }
    getProjects() {
        axios.get('/api/projects')
            .then(res => {
                this.setState({
                    projects: res.data
                })
            })
    }
    //ON DRAG END--------------------------------------------------------------------------
    onDragEnd = result => {
        const { destination, source } = result
        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }


        if (
            destination.droppableId === 'trash-can'
        ){
            console.log(this.state.tasks[source.index])
            axios.delete('/api/task/:id', this.state.tasks[source.index].task_id).then(res => {
                console.log('fred')

            })
        }



        const newTaskOrder = Array.from(this.state.taskOrder)
        const sourceValue = newTaskOrder.splice(source.index, 1)


        newTaskOrder.splice(destination.index, 0, sourceValue[0])


        this.state.taskOrder = newTaskOrder


        const newTasks = Array.from(this.state.tasks)


        for (let i = 0; i < this.state.taskOrder.length; i++) {
            newTasks[i].droppable_id = this.state.taskOrder[i]
        }
    }

    //ADD BUTTON METHOD--------------------------------------------------------------------------
    addButton() {
        console.log('fred')
        // this.setState({
        //     tasks: [...this.state.tasks, {
        //         task_id: 8,
        //         content: 'test',
        //         droppable_id: 8
        //     }]
        // })

        axios.post('/api/tasks').then(res => {
            // console.log(res.data)
            this.setState({

                tasks: res.data
            })
            this.getTasks()
            this.getTaskOrder()
        })
    }


    // updateTasks(id, droppable){
    //             axios.post('/api/tasks', {id, droppable}).then(res => 
    //                 this.setState({
    //                     tasks: res.data
    //                 }))
    //         }


    render() {
        return (
            <Container>
                <Sidebar />
                <div>

                    <DragDropContext
                        onDragEnd={this.onDragEnd}>

                        {(this.state.projects.length > 0) &&

                            <div>

                                {this.state.projects.map((projectID, index) => {
                                    const project = this.state.projects[index]

                                    const tasks = this.state.tasks.map((taskId, index) => this.state.tasks[index])
                                    return <Project key={project.project_id} project={project} tasks={tasks} />
                                })}

                                <button
                                    onClick={() => this.addButton()}
                                >add</button>


                                <TrashCan/>



                            </div>}
                    </DragDropContext>
                </div>



            </Container>




        )
    }
}