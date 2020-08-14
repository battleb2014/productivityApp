import React from 'react';

const Todo = (props) => {

    if (props.todo.task === ' ') {
        return null;
    }

    return (
        <div
            key={props.todo.id}
            onClick={event => {
                props.toggleComplete(props.todo.id)
            }}
        >
            <p className='list'>{props.todo.task}</p>
        </div>
    )
}

export default Todo;