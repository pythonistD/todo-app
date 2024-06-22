import React from'react';
import TodoCard from './TodoCard'

export default function TodoList(){
    let todos = [
        'Get ready for exam',
        'Hang the curtains',
        'Repeat cards in Anki'
    ]
    return(
        <ul className='main'>
            {
                todos.map((task, taskIndex) => {
                    return(
                        <TodoCard key={taskIndex}>
                            <p>{task}</p>
                        </TodoCard>
                    )
                })
            }
        </ul>
    )
}

