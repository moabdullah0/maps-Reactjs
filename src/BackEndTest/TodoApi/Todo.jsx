import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import apiClient from "../../Services/api-Client";
import TodoForm from "./TodoForm";
import DialogTEmplate from "./DialogTEmplate";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const deleteTodo = async (id) => {
    await apiClient.delete(`/todos/${id}`);
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  // const postData = async () => {
  //   const newData = { title: "New Todo", completed: false, id: 0 };
  //   await apiClient.post("/todos", newData);
  //   setTodo([...todo, newData]);
  // };
  const updateData = async (id, data) => {
    const newData = {
      title: "New Todo",
      completed: data.completed,
      id: id,
    };
    await apiClient.put(`/todos/${id}`);
    setTodo(todo.map((todo) => (todo.id == id ? newData : todo)));
  };
  useEffect(() => {
    //mounting
    const controller = new AbortController();

    try {
      const GetTodo = async () => {
        await apiClient
          .get("/todos", {
            signal: controller.signal,
          })
          .then((response) => setTodo(response.data));
      };
      GetTodo();
    } catch (err) {
      setError(err.message);
    }
    //unmounting
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <DialogTEmplate
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList deleteTodo={deleteTodo} todos={todo} updateData={updateData} />
    </div>
  );
};

export default Todo;
