import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import apiClient from "../../Services/api-Client";
import TodoForm from "./TodoForm";
import PopUp from "./PopUp";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [error, setErrror] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  const deleteTodo = async (id) => {
    await apiClient.delete(`/todos/${id}`);
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const PostTodo = async () => {
    const newTodo = {
      id: todo.length + 1,
      title: "New Todo",
      completed: false,
    };
    await apiClient.post("/todos", newTodo);
    setTodo([...todo, newTodo]);
  };
  const UpdateData = async (id, data) => {
    const UpdateDataTodo = {
      title: data.title + " Updated",
      id: data.id,
      completed: !data.completed,
    };
    const initialData = [...todo];
    await apiClient
      .put(`/todos/${id}`, UpdateDataTodo)
      .then(() =>
        setTodo(todo.map((todo) => (todo.id == id ? UpdateDataTodo : todo)))
      )
      .catch((err) => {
        setErrror(err.message);
        setTodo(initialData);
      });
  };
  useEffect(() => {
    //mounting
    const controller = new AbortController();
    const getData = async () => {
      await apiClient
        .get("/todos", {
          signal: controller.signal,
        })
        .then((response) => setTodo(response.data))
        .catch((err) => setErrror(err.message));
    };
    getData();
    //unmounting
    return () => controller.abort();
  }, []);
  return (
    <div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      {/* <TodoForm setTodo={setTodo} todo={todo}/> */}
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} setTodo={setTodo}/>
      <TodoList
        todo={todo}
        deleteTodo={deleteTodo}
        PostTodo={PostTodo}
        UpdateDataTodo={UpdateData}
      />
    </div>
  );
};

export default Todos;
