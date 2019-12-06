import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import TaskContainer from './TaskContainer'

const TaskList = SortableContainer(props => {
    return (
        <div>
            {props.tasks.map((task, index) => <TaskContainer
            key={task.task_id}
            index={index}
            task={task}
            projectUser={props.projectUser}
            getTasks={props.getTasks}
            helperClass='test2' 
            />)}
        </div>
    )
})

export default TaskList