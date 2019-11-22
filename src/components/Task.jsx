import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgray
padding: 8px
margin: 8px
background: oldlace`


export default class Task extends React.Component{
    state = {

    }
    render(){
        // console.log(this.props.task.task_id, this.props.task.content, this.props.task.droppable_id)
        const content = this.props.tasks.find(el => el.task_id === +this.props.task.droppable_id)
        // const test = this.props.tasks.find(el => console.log(el))
        // console.log(test)
        return (
        
        <Draggable draggableId={this.props.task.task_id.toString()} index={this.props.index}>
            {(provided)=> (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>

            {content ? <span>{content.content}</span> : <span>new task</span>}
            {/* {this.props.task.task_id} */}
            {this.props.task.droppable_id}
                <br/>

        </Container>
                )}
                
        </Draggable> 
        )
    }
}