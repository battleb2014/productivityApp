import React from 'react';

const TodoForm = (props) => {

    if (props.addTask === ' ') {
        return null;
    }

    return (
        <form className='form'>
            <input
                name='todo'
                type='text'
                onChange={props.inputChangeHandler}
                placeholder='enter a task' />
            <button onClick={props.addTask}>Add a Task</button>
            <button onClick={props.removeItems}>Remove Completed</button>
        </form>
    )
}

export default TodoForm;