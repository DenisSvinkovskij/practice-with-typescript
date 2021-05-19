import React from 'react';
import { ITodo } from '../types';
import TodoItem from './TodoItem';

interface ITodoList {
  todos: ITodo[];
  onDelete(e: React.MouseEvent, id: number): void;
  toggleCompleted(id: number): void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  onDelete,
  toggleCompleted,
}) => {
  return (
    <div className="container">
      <ul className=" list">
        {todos.map(todo => (
          <TodoItem
            item={todo}
            key={todo.id}
            deleteTodo={e => onDelete(e, todo.id)}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
