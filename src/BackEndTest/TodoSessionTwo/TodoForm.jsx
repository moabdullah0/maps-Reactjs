import React from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../Services/api-Client";

const TodoForm = ({ todo, setTodo ,setIsOpen}) => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = async (data) => {
    await apiClient.post("/todos", data);
    setTodo([...todo, data]);
    reset();
    setIsOpen(false)
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4  rounded-lg  space-y-4"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title")}
            placeholder="Enter title"
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="completed"
            name="completed"
            {...register("completed")}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="completed" className="ml-2 text-sm text-gray-700">
            Completed
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
