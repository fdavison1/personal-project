import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgray
padding: 8px
margin: 8px
background: ${props => (props.isDragging ? 'lightgreen' : 'oldlace')}`


export default class Task extends React.Component {
    state = {
        editField: false,
        localContent: ''
    }

    editTask() {
        this.setState({
            editField: !this.state.editField
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
            // console.log('fred')
            const id = this.props.task.task_id
            // console.log(id)

            axios.put(`/api/task/${id}`, [this.state.localContent]).then(res => {
                // console.log('fred')






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
        // console.log(this.props.task.task_id, this.props.task.content, this.props.task.droppable_id)
        const content =
            this.props.tasks.find(el => el.task_id === +this.props.task.droppable_id)

        // const content = content.content
        // const test = this.props.tasks.find(el => console.log(el))
        // console.log(test)
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



                                content ? <span>{content.content}</span> : <span>new task</span>
                            // this.props.task.task_id <= 6 ? <span>{content.content}</span> 
                            // : this.state.localContent ? <span>{this.state.localContent}</span> :
                            // <span>new task</span>
                            //  && <span>{this.state.localContent}</span>

                            :

                            <input
                                onChange={(e) => this.contentChange(e)}
                                placeholder={content ? content.content : 'new task'}
                                type="text"
                                onKeyPress={(e) => this.submit(e)}
                            />

                        }

                        {/* *****FOR TESTING PURPOSES***** */}
                        {this.props.task.content}
                        {this.state.localContent}
                        <br />
                        <span>task_id:</span>{this.props.task.task_id}
                        <br />
                        <span>drop_id</span>{this.props.task.droppable_id}
                        {this.state.editField}
                        <br />

                    </Container>
                )}

            </Draggable>
        )
    }
}