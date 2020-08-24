import React from 'react';

const Todo = (props) => {

    if (props.todo.task === ' ') {
        return null;
    }

    return (
        <div
            className = 'todoList'
            key={props.todo.id}
            onClick={event => {
                props.toggleComplete(props.todo.id)
            }}
        >
            <p className='list'>
                <img src="https://img.icons8.com/color/48/000000/checkmark.png" className='checkmark' id = 'checkmark' />
                {props.todo.task}
            </p>
        </div>
    )
}

export default Todo;