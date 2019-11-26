import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Task from './Task'
import TrashCan from './TrashCan'


const Container = styled.div`
border: 1px solid lightgray
border-radius: 5px
margin: 75px
min-width: 500px
max-width: 100px
background: ${props => ((props.sessionUser === props.projectUser) ? 'white' : 'lightgray')}`
const Title = styled.h3`
font-family: sans-serif
margin: 3px
font-size: 3rem
font-weight: 200`
const TaskList = styled.div`
font-weight: 200
background: ${props => ((props.sessionUser === props.projectUser) ? 'white' : 'lightgray')}`
const Add = styled.div`
height: 90px
width: 90px
background: black
border-radius: 50%
color: white
display: flex
align-items: center
justify-content: center
font-size: 5.5rem
font-weight: 200
padding-bottom: 20px
box-sizing: border-box
&:hover {
    height: 135px
    width: 135px
    font-size: 7rem
}`
const Buttons = styled.div`
display: flex
justify-content: space-evenly
align-items: center
margin: 8px
width: 40%`
const Content = styled.div`
font-size: 1.5rem
margin-top: 25px`


class Project extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            projectUser: '',
            tasks: []
        }
        this.getTasks = this.getTasks.bind(this)
    }

    componentDidMount() {
        this.getProjectUser()
        // console.log(this.props.project.project_id)
        this.getTasks()
    }

    getProjectUser() {
        axios.get(`/api/project/${this.props.project.project_id}`)
            .then(res => {
                // console.log(res)
                this.setState({
                    projectUser: res.data[0].username
                })
            })
    }
    getTasks() {
        const userID = this.props.project.project_id
        // console.log(userID)
        axios.get(`/api/tasks/${userID}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    tasks: res.data
                })
            })
        }

    //ON DRAG END--------------------------------------------------------------------------
    onDragEnd = result => {
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
        ////TRASH CAN: AXIOS DELETE
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

                // const userID = localStorage.getItem('userID')
                this.getTasks()
    })}}





    //ADD BUTTON METHOD--------------------------------------------------------------------------
    addButton() {
        // console.log(this.props.tasks)

        // this.setState({
        //     drop_id: this.state.drop_id + 1
        // })
        // console.log(this.state.drop_id)
        const id = localStorage.getItem('userID')
        // console.log(id)

        axios.post('/api/tasks', [id]).then(res => {
            // console.log(res.data)
            this.setState({

                tasks: res.data
            })


            this.getTasks()
            // this.getTaskOrder()
        })
    }

    render() {
        const { tasks } = this.state
        return (
            <DragDropContext
            onDragEnd={this.onDragEnd}
            >

            <Droppable droppableId={this.props.project.droppable_id}>
                {(provided, snapshot) => (
                    <Container
                    sessionUser={localStorage.getItem('username')}
                    projectUser={this.state.projectUser}
                    >


                        <Content>{this.state.projectUser}</Content>

                        <Title>{this.props.project.title}</Title>

                        <TaskList
                            sessionUser={localStorage.getItem('username')}
                            projectUser={this.state.projectUser}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            >

                            {tasks.map((task, index) => <Task key={task.task_id}
                                task={task} index={index} tasks={tasks} getTasks={this.getTasks} />)}
                            {provided.placeholder}
                        </TaskList>


                        {(localStorage.getItem('username') === this.state.projectUser) &&
                            <div className="test">
                                <Buttons>
                                    <Add
                                        onClick={() => this.addButton()}
                                        >+</Add>
                                </Buttons>


                                <TrashCan />
                            </div>}



                    </Container>
                )}
            </Droppable>
            </DragDropContext>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Project)