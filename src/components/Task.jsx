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
        const content = this.props.tasks.find(el => el.task_id === this.props.task.droppable_id)
        return (
        
        <Draggable draggableId={this.props.task.task_id.toString()} index={this.props.index}>
            {(provided)=> (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>

            <span>{content.content}</span>
                <br/>

        </Container>
                )}
                
        </Draggable> 
        )
    }
}