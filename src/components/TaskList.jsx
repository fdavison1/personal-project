import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import TaskContainer from './TaskContainer'

const TaskList = SortableContainer(props => {
    return (
        <div>
            {props.tasks.map((task, index) => <TaskContainer
            key={task}
            index={index}
            task={task}
            />)}
        </div>
    )
})

export default TaskList