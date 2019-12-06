import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import Task from './Task'

const TaskContainer = SortableElement(props => {
    return (
        <Task task={props.task}
        projectUser={props.projectUser}
        helperClass='test2' 
        getTasks={props.getTasks}/>
    )
})

export default TaskContainer