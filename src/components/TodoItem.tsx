import React from 'react'
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    return(
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => {}}/>
            {todo.id}. {todo.title} 
        </div>
    )
}

export default TodoItem;