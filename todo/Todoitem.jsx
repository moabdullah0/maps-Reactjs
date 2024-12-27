import React from "react";

const Todoitem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex gap-5 items-center justify-between p-2 bg-white rounded shadow-md mb-2">
      <li
        className={`${
          todo.completed
            ? "line-through text-green-500 bg-green-400" 
            : "text-gray-800" 
        } flex-grow`}
      >
        {todo.title}
      </li>

   
      <div className="flex space-x-2">
     
        <button
          className={`px-4 py-2 rounded ${
            todo.completed ? "bg-green-400" : "bg-blue-400"
          } text-black`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        
       
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
