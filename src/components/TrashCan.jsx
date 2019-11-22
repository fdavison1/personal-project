import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const TrashCanDiv = styled.div`
background: #262626
color: white
width: 500px
height: 100px
margin: 0 auto
display: flex
align-items: center
justify-content: center`


export default class extends React.Component {


    render() {
        return (

            <Droppable droppableId={'trash-can'}>
                {(provided) => (
                    <TrashCanDiv
                    ref={provided.innerRef}
                    {...provided.droppableProps}>



            
                [trashcan]
                
                
                
                    {provided.placeholder}
            </TrashCanDiv>
                    )}
            </Droppable>




        )
    }
}