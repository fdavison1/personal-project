import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import Task from './Task'

const TaskContainer = SortableElement(props => {
    return (
        <Task task={props.task}/>
    )
})

export default TaskContainer