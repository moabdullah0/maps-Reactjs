import React from "react";
import Todoitem from "./Todoitem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
