import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import Task from './Task'

const TaskContainer = SortableElement(props => {
    return (
        <Task task={props.task}
        projectUser={props.projectUser}
        getTasks={props.getTasks}/>
    )
})

export default TaskContainer