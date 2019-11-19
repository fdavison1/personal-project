import React from 'react'
import { TaskContainer, Content } from '../css/styledComponents'

export default function Task(props) {
    const {taskObj} = props
    return (
        <TaskContainer>
            
            <Content>{taskObj.content}</Content>

        </TaskContainer>
    )
}