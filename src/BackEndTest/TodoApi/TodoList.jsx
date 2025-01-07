import React from "react";

const TodoList = ({ todos, deleteTodo,updateData }) => {
  return (
    <div>

      <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
        {todos.map((todo, i) => (
          <a
            key={i}
            href="#"
            className={`bg-gray-100 flex-grow text-black border-l-8 ${
              todo.completed ? "border-green-500" : "border-red-500"
            } rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12`}
          >
            {todo.title}
            <div className="text-gray-500 font-thin text-sm pt-1 flex flex-col">
              <span>Topics: {todo.id}</span>
              <span
                className={`${
                  todo.completed ? "text-green-500" : "text-red-500"
                }`}
              >
                {String(todo.completed)}
              </span>
              {/* <button
                onClick={() => deleteTodo(todo.id)}
                className="text-green-600"
              >
                Delete
              </button>
              <button
                onClick={() => updateData(todo.id,todo)}
                className="text-red-600 mt-5"
              >
                Update 
              </button> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
