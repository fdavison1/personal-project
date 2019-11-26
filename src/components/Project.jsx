import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'
import TrashCan from './TrashCan'


const Container = styled.div`
border: 1px solid lightgray
border-radius: 5px
margin: 75px
min-width: 500px
max-width: 100px
background: white`
const Title = styled.h3`
font-family: sans-serif
margin: 3px
font-size: 3rem
font-weight: 200`
const TaskList = styled.div`
font-weight: 200
background: white`
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
            projectUser: ''
        }
    }

    componentDidMount(){
        this.getProjectUser()
    }

    getProjectUser(){
        axios.get(`/api/project/${this.props.project.project_id}`)
        .then(res => {
            console.log(res)
            this.setState({
                projectUser: res.data[0].username
            })
        })
    }

    render() {
        const { tasks } = this.props
        return (

            <Droppable droppableId={this.props.project.droppable_id}>
                {(provided, snapshot) => (
                    <Container>

                        {/* <Content>{this.props.project.project_id}</Content> */}
                        <Content>{this.state.projectUser}</Content>
                        {/* <Content>{this.props.username}</Content> */}
                        <Title>{this.props.project.title}</Title>

                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >

                            {tasks.map((task, index) => <Task key={task.task_id}
                                task={task} index={index} tasks={tasks} getTasks={this.props.getTasks} />)}
                            {provided.placeholder}
                        </TaskList>


                        <div className="test">

                            <Buttons>
                                <Add
                                    onClick={() => this.props.addButton()}
                                >+</Add>
                            </Buttons>


                            <TrashCan />
                        </div>


                    </Container>
                )}
            </Droppable>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps)(Project)