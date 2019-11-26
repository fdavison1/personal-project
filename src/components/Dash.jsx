import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { DragDropContext } from 'react-beautiful-dnd'
import Project from './Project'
import Sidebar from './Sidebar'

const Container = styled.div`
display: flex
background: white`

const SideBar2 = styled.div`
min-height: 100vh
height: auto
background: lightgray
width: 300px
display: flex
flex-direction: column
align-items: center
justify-content: space-between`


export default class Dash extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            taskOrder: [],
            projects: [],
            allLists: false
        }
        // this.addButton = this.addButton.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.allListsTrue = this.allListsTrue.bind(this)
        this.allListsFalse = this.allListsFalse.bind(this)
        this.getProjects = this.getProjects.bind(this)
    }


    //INITIAL RENDER--------------------------------------------------------------------------
    componentDidMount() {
        const userID = localStorage.getItem('userID')
        this.getProjects(userID)
        this.getTasks(userID)
        // this.getTaskOrder()
    }

    getTasks(userID) {
        // console.log(userID)
        axios.get(`/api/tasks/${userID}`)
            .then(res => {
                // console.log(res.data)
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
    ///need to update
    getProjects() {

        if (!this.state.allLists){
        const id = localStorage.getItem('userID')
        axios.get(`/api/projects/${id}`)
            .then(res => {
                // console.log(res)
                this.setState({
                    projects: res.data
                })
            })}
        if (this.state.allLists){
            axios.get('/api/projects').then(res => {
                this.setState({
                    projects: res.data
                })
            })
        }
    }
    allListsTrue(){
        this.setState({
            allLists: true
        })
    }
    allListsFalse(){
        this.setState({
            allLists: false
        })
    }

    //ON DRAG END--------------------------------------------------------------------------
    onDragEnd = async result => {
        const { destination, source } = result
        //NO ACTION REQUIRED: no destination or dropped in same location
        if (!destination) {
            return
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

    //     ////TRASH CAN: AXIOS DELETE
        if (
            destination.droppableId === 'trash-can'
        ) {
            // console.log(this.state.tasks)
            const id = this.state.tasks[source.index].task_id
            // console.log(id)
            // console.log(this.state.tasks[source.index])
            axios.delete(`/api/task/${id}`).then(res => {
                // console.log('fred')
                
                
                
                // this.getTaskOrder()

                const userID = localStorage.getItem('userID')
                this.getTasks(userID)
                
                // const newTasks = Array.from(this.state.tasks)


        // for (let i = 0; i < this.state.taskOrder.length; i++) {
        //     newTasks[i].droppable_id = this.state.taskOrder[i]
        // }
                
        //         return

            })
        }



    //     const newTaskOrder = Array.from(this.state.taskOrder)
    //     const sourceValue = newTaskOrder.splice(source.index, 1)
    //     newTaskOrder.splice(destination.index, 0, sourceValue[0])

    //     ///need to fix (mutating state)?
    //     this.state.taskOrder = newTaskOrder

    //     // this.setState({
    //     //     taskOrder : newTaskOrder
    //     // })

    //     const newTasks = Array.from(this.state.tasks)


    //     for (let i = 0; i < this.state.taskOrder.length; i++) {
    //         newTasks[i].droppable_id = this.state.taskOrder[i]
    //     }
    }

    //ADD BUTTON METHOD--------------------------------------------------------------------------
    // addButton() {

    //     this.setState({
    //         drop_id: this.state.drop_id + 1
    //     })

    //     // console.log(this.state.drop_id)

    //     axios.post('/api/tasks', ['1']).then(res => {
    //         // console.log(res.data)
    //         this.setState({

    //             tasks: res.data
    //         })


    //         this.getTasks()
    //         this.getTaskOrder()
    //     })
    // }


    render() {
        return (
            <Container>
                <Sidebar 
                allListsTrue={this.allListsTrue}
                allListsFalse={this.allListsFalse}
                getProjects={this.getProjects}
                />

                <SideBar2/>

                {/* <DragDropContext */}
                    {/* onDragEnd={this.onDragEnd}> */}

                    {(this.state.projects.length > 0) &&

                        <div className='test1'>

                            {this.state.projects.map((projectID, index) => {
                                const project = this.state.projects[index]

                                const tasks = this.state.tasks.map((taskId, index) => this.state.tasks[index])
                                return <Project key={project.project_id}
                                    project={project}
                                    tasks={tasks}
                                    addButton={this.addButton}
                                    getTasks={this.getTasks}
                                />
                            })}




                        </div>}
                {/* </DragDropContext> */}




            </Container>




        )
    }
}