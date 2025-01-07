import React from "react";

const TodoItem = ({ todo }) => {
  return (
      <div>
        
        <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
        <a
            key={todo.id}
            href="#"
            className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
          >
            {todo.title}
            <div className="text-gray-500 font-thin text-sm pt-1 flex flex-col">
              <span>Topics: {todo.id}</span>
              <span
                className={`${
                  todo.completed ? "text-green-500" : "text-red-400"
                } ` }
              >
                {String(todo.completed)}
              </span>
            </div>
          </a>
        </div>
      </div>
  );
};

export default TodoItem;
