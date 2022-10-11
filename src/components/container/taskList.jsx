import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task(
        'Default Name',
        'Default Description',
        false,
        LEVELS.NORMAL
    );

    return (
        <div>
            <h1>List of Tasks:</h1>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent