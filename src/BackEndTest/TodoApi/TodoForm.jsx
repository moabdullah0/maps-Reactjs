import React from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../Services/api-Client";
const TodoForm = ({ setTodo, todo ,setIsOpen}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    apiClient.post("/todos", data);
    setTodo([...todo, { ...data, id: todo.length + 1 }]);
    reset();
    setIsOpen(false)
  };
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg  w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add a To-Do Item
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Post Title */}
          <div>
            <label
              htmlFor="post-title"
              className="block text-sm font-medium text-gray-700"
            >
              Post Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="post-title"
              placeholder="Enter the title of your task"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Completed */}
          <div className="flex items-center">
            <input
              {...register("completed")}
              type="checkbox"
              id="completed"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="completed"
              className="ml-2 block text-sm text-gray-700"
            >
              Completed
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add To-Do
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
