import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const TrashCanDiv = styled.div`

background-image: url('https://www.logolynx.com/images/logolynx/34/3448d15fc06ab3360c592fd69585236d.jpeg')
color: white
height: 100px
display: flex
align-items: center
justify-content: center
border: solid red
margin: 0 auto
`


export default class extends React.Component {


    render() {
        return (

            <Droppable droppableId={'trash-can'}>
                {(provided) => (
                    <TrashCanDiv
                    ref={provided.innerRef}
                    {...provided.droppableProps}>



            
                    <img src="https://www.logolynx.com/images/logolynx/34/3448d15fc06ab3360c592fd69585236d.jpeg" alt=""/>
                
                
                
                    {provided.placeholder}
            </TrashCanDiv>
                    )}
            </Droppable>




        )
    }
}