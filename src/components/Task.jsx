import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgray
border-radius: 5px
padding: 8px
margin: 8px
background: ${props => (props.isDragging ? 'lightgreen' : 'oldlace')}`


export default class Task extends React.Component {
    state = {
        editField: false,
        localContent: ''
    }

  

    editTask() {
        //if sessionUser = projectUser...
        const sessionUser = localStorage.getItem('username')
        const { projectUser } = this.props

        if (sessionUser === projectUser)


        {this.setState({
            editField: !this.state.editField
        })}

        return
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

            <Draggable draggableId={this.props.task.task_id.toString()} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        onDoubleClick={() => this.editTask()}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}>



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

                        {/* *****FOR TESTING PURPOSES***** */}
                        {/* {this.props.task.content} */}
                        {/* {this.state.localContent} */}
                        {/* <br /> */}
                        {/* <span>task_id:</span>{this.props.task.task_id} */}
                        <br />
                        <span>drop_id:</span>{this.props.task.droppable_id}
                        {/* <br/> */}
                        {/* <span>user_id:</span>{this.props.task.user_id} */}

                    </Container>
                )}

            </Draggable>
        )
    }
}