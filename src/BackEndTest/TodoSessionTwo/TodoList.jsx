import React from "react";

const TodoList = ({ todo, deleteTodo, UpdateDataTodo }) => {
  return (
    <div>
      <div class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
        {todo.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`bg-gray-100 flex-grow text-black border-l-8 ${
              item.completed ? "border-green-500" : "border-red-500"
            } rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12`}
          >
            {item.title}

            <div class="text-gray-500 font-thin text-sm pt-1 flex flex-col gap-5">
              <span>Topics: {item.id}</span>
              <span
                className={`${
                  item.completed ? "text-green-500" : "text-red-500"
                }`}
              >
                {String(item.completed)}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-red-500 text-center border border-red-500 rounded-lg px-4 pt-2"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
              <button
                className="text-blue-500 text-center border border-blue-500 rounded-lg px-4 pt-2"
                onClick={() => UpdateDataTodo(item.id, item)}
              >
                Update
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
