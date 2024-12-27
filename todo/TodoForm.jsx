import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ addTodo }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addTodo(data.todos);
    reset();
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">
      <form
        className="flex flex-col items-start space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("todos")}
          placeholder="Add a new todo"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
