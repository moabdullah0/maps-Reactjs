import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newText) => {
    setTodos([...todos, { id: Date.now(), title: newText, completed: false }]);
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
   
    console.log(todos);
  };
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo) => todo.id !== id))
        }
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        <Todoitem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todo;
