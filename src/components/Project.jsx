import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import arrayMove from 'array-move'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'
import TaskList from './TaskList'

const Container = styled.div`
display: flex
flex-direction: column
justify-content: center
border: 2px solid #999999
border-radius: 5px
margin: 25px
width: 500px
background: ${props => ((props.sessionUser === props.projectUser) ? 'white' : 'lightgray')}`

const Title = styled.h3`
font-family: sans-serif
margin: 3px
font-size: 3rem
font-weight: 200`

const Add = styled.div`
transition: all 1s ease
color: #999999
border: 1px solid #999999
height: 50px
width: 50px
border-radius: 50%
display: flex
align-items: center
justify-content: center
font-size: 1.5rem
font-weight: 200
margin-left: 10px
box-sizing: border-box
padding: 10px
box-sizing: border-box
&:hover {
    font-weight: 600
    border: 2px solid black
    color: black
    background: #34A7C1
}`

const Buttons = styled.div`
display: flex
justify-content: center
align-items: center
margin: 0 auto
width: 100%`

const Buttons2 = styled.div`
display: flex
justify-content: space-between
align-items: center
margin: 10px`

const Content = styled.div`
font-size: 1.5rem`

const Hidden = styled.div`
display: none`


class Project extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            projectUser: '',
            tasks: [],
            taskOrder: [],
            hiddenValue: false

        }
        this.getTasks = this.getTasks.bind(this)
        this.hidden = this.hidden.bind(this)
    }

    componentDidMount() {
        this.getProjectUser()
        this.getTasks()
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
    }
    //HIDDEN PROJECT--------------------------------------------------------------------------
    hidden(e) {
        // console.log(e.target.checked)
        this.setState({
            hiddenValue: !e.target.checked
        })
        // console.log(this.state.hiddenValue)
    }


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
        return (
            <div>


                {(this.props.allLists && this.state.hiddenValue) ? <Hidden />


                    : <Container
                        sessionUser={localStorage.getItem('username')}
                        projectUser={this.state.projectUser}
                    >

                        <Buttons2>
                            <Content>{this.state.projectUser}</Content>
                        {(localStorage.getItem('username') === this.state.projectUser) &&
                            <ToggleSwitch
                                hidden={this.hidden} />}
                        {/* </Buttons2>
                        <Buttons2> */}
                        </Buttons2>


                        <Buttons>
                        <Title>{this.props.project.title}</Title>

                        {(localStorage.getItem('username') === this.state.projectUser) &&
                        <Add onClick={() => this.addButton()}> 
                        <i className="fas fa-plus"></i> 
                        </Add>}
                        </Buttons>


                        <TaskList tasks={this.state.tasks} onSortEnd={this.onSortEnd}
                            projectUser={this.state.projectUser} getTasks={this.getTasks}
                            helperClass='test2' />

                        {/* {(localStorage.getItem('username') === this.state.projectUser) &&
                            <div className="test">
                                <Buttons>
                                    <Add
                                        onClick={() => this.addButton()}
                                    > <i className="fas fa-plus"></i> </Add>
                                </Buttons> */}

                                {/* <TrashCan /> */}
                            {/* </div>} */}

                    </Container>
                }
            </div>

        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Project)