import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'


const Trash = styled.div`
display: flex
margin: 8px
height: 100px;
background: url('https://www.logolynx.com/images/logolynx/34/3448d15fc06ab3360c592fd69585236d.jpeg');
border: 1px solid lightgray
background-position: center;
background-size: contain;
background-repeat: no-repeat
border-radius: 5px`


export default class extends React.Component {


    render() {
        return (

            <Droppable droppableId={'trash-can'}>
                {(provided) => (
                    <Trash
                    
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {provided.placeholder}

                   
            </Trash>
                    )}
            </Droppable>




        )
    }
}