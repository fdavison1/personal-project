import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
display: flex
align-items: center
justify-content: center
border: 1px solid #999999
border-radius: 5px
padding: 8px
margin: 8px
background: oldlace`

const TaskButtons = styled.div`
margin-left: 10px`



export default class Task extends React.Component {
    state = {
        editField: false,
        localContent: ''
    }



    editTask() {
        // console.log('fred')
        //if sessionUser = projectUser...
        const sessionUser = localStorage.getItem('username')
        const { projectUser } = this.props

        // console.log(sessionUser)
        // console.log(projectUser)

        if (sessionUser === projectUser) {
            this.setState({
                editField: !this.state.editField
            })
        }

        return
    }

    deleteTask(id){
        // console.log(id)
            axios.delete(`/api/task/${id}`).then(res => {
                
                
                
                this.props.getTasks()
    })
}

    contentChange(e) {
        // console.log(e.target.value)
        this.setState({
            localContent: e.target.value
        })
    }

    //EDIT FUNCTION ----- AXIOS PUT
    submit(event) {
        const code = event.key
        if (code === 'Enter') {
            if (this.state.localContent.length === 0) {
                this.setState({
                    editField: false
                })
                return
            }
            const id = this.props.task.task_id

            axios.put(`/api/task/${id}`, [this.state.localContent]).then(res => {
                this.props.getTasks()
            })
            this.setState({
                editField: false
            })



        }
    }

    clearLocalContent() {
        console.log('fred')
    }


    render() {

        return (


            <Container
                onDoubleClick={() => this.editTask()}
            >



                {!this.state.editField ?


                    <span>{this.props.task.content}</span>

                    :

                    <input
                        onChange={(e) => this.contentChange(e)}
                        placeholder={this.props.task.content}
                        type="text"
                        onKeyPress={(e) => this.submit(e)}
                    />

                }


                {(this.props.projectUser === localStorage.getItem('username')) &&
                <TaskButtons>
                    <button
                        onClick={() => this.editTask()}
                    >edit
                </button>
                    <button
                        onClick={() => this.deleteTask(this.props.task.task_id)}>X</button>
                </TaskButtons>}

            </Container>

        )
    }
}