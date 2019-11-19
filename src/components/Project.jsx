import React from 'react'
import { Container, Title, TaskButton, Right } from '../css/styledComponents'
import Task from './Task'

export default function Project() {
    return (
        <Container>

            <Title>Project.jsx</Title>
            <Task/>
            <Task/>
            <Task/>

            <Right>
            <TaskButton>+</TaskButton>
            </Right>

        </Container>
    )
}