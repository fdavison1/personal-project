import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import arrayMove from 'array-move'
// import { SortableContainer } from 'react-sortable-hoc'
import styled from 'styled-components'
// import Task from './Task'
// import TaskList from './TaskList'
// import TrashCan from './TrashCan'
import ToggleSwitch from './ToggleSwitch'
// import ImgContainer from './ImgContainer'
import TaskList from './TaskList'

const Container = styled.div`
display: flex
flex-direction: column
border: 1px solid #999999
border-radius: 5px
margin: 50px
width: 500px
background: white`

const Title = styled.h3`
font-family: sans-serif
margin: 3px
font-size: 3rem
font-weight: 200`

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
            tasks: [],
            taskOrder: []

        }
        this.getTasks = this.getTasks.bind(this)
    }

    componentDidMount() {
        this.getProjectUser()
        this.getTasks()
        // await this.getTaskOrder()
        // console.log(this.state.taskOrder)
        // localStorage.setItem('taskOrder', this.state.taskOrder)
        // console.log(localStorage.getItem('taskOrder'))
    }

    getProjectUser() {
        axios.get(`/api/project/${this.props.project.project_id}`)
            .then(res => {
                this.setState({
                    projectUser: res.data[0].username
                })
            })
    }
    getTasks() {
        const userID = this.props.project.project_id
        axios.get(`/api/tasks/${userID}`)
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
        // this.getTaskOrder()
    }

    // getTaskOrder() {
        // console.log('fred')
        // axios.get(`/api/taskOrder/${this.props.project.project_id}`).then(res => {
            // console.log(res.data)
            // const newTaskOrder = []
            // newTaskOrder.push(res.data.map(taskID => taskID.task_id))
            // console.log(newTaskOrder)
            // console.log(newTaskOrder[0])
            // this.setState({
            // taskOrder: newTaskOrder[0]
            // })
            // console.log(this.state.taskOrder)

            // localStorage.setItem("array", JSON.stringify(array));
            // array = JSON.parse(localStorage.getItem("array"));

            // localStorage.setItem('taskOrder', JSON.stringify(newTaskOrder[0]))

            // const order = JSON.parse(localStorage.getItem('taskOrder'));
            // console.log(order)
            // localStorage.setItem('taskOrder', newTaskOrder[0])
            // console.log(localStorage.getItem('taskOrder'))
        // })
    // }

    //ADD BUTTON METHOD--------------------------------------------------------------------------
    addButton() {
        const id = localStorage.getItem('userID')

        axios.post('/api/tasks', [id]).then(res => {
            this.setState({
                tasks: res.data
            })
            this.getTasks()
        })
    }
    //ON SORT END----------------------------------------------------------------------------------
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({ tasks: arrayMove(this.state.tasks, oldIndex, newIndex) })
    }

    render() {
        // console.log(this.props.project)
        // const { tasks } = this.state
        return (




            <Container
                sessionUser={localStorage.getItem('username')}
                projectUser={this.state.projectUser}
            >

                {(localStorage.getItem('username') === this.state.projectUser) &&
                                <ToggleSwitch />}


                <Content>{this.state.projectUser}</Content>

                <Title>{this.props.project.title}</Title>

                {/* TESTING */}
                {/* {JSON.parse(localStorage.getItem('taskOrder'))} */}
                {/* <button
                                onClick={() => this.getTaskOrder()}
                                >getTaskOrder</button>
                                <br />
                                taskOrder: {this.state.taskOrder}
                                <br />
                            localStorage:{localStorage.getItem('taskOrder')} */}

                {/* <TaskList images={this.state.images} onSortEnd={this.onSortEnd} /> */}
                <TaskList tasks={this.state.tasks} onSortEnd={this.onSortEnd} 
                projectUser={this.state.projectUser} getTasks={this.getTasks}/>

                {/* <TaskList
                    sessionUser={localStorage.getItem('username')}
                    projectUser={this.state.projectUser}
                    >

                    {tasks.map((task, index) => <Task key={task.task_id}
                        task={task} index={index} tasks={tasks} getTasks={this.getTasks}
                        projectUser={this.state.projectUser} />)}

                </TaskList> */}

                {(localStorage.getItem('username') === this.state.projectUser) &&
                    <div className="test">
                        <Buttons>
                            <Add
                                onClick={() => this.addButton()}
                            >+</Add>
                        </Buttons>

                        {/* <TrashCan /> */}
                    </div>}

            </Container>


        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Project)