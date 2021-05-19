import React, { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../types';


export const TodoPage: React.FC = props => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text: string): void => {
    const todo: ITodo = {
      text,
      id: Date.now(),
      completed: false,
    };
    setTodos(prev => [todo, ...prev]);
  };

  const deleteTodoHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    if (window.confirm('Confirm deleting please')) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  const toggleCompleted = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  return (
    <>
      <TodoForm onAdd={addTodoHandler} />
      <TodoList
        todos={todos}
        onDelete={deleteTodoHandler}
        toggleCompleted={toggleCompleted}
      />
    </>
  );
};
