import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
const Temp = () => {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState({});
  const onSubmit = (data) => {
    console.log(data);
    setAuth(data);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <InputForm
              register={register}
              id={"email"}
              title={"Email Address"}
              type={"email"}
            />
          </div>
          <div className="mb-4">
            <InputForm
              id={"password"}
              type={"password"}
              register={register}
              title={"Password"}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <h1>{auth.email}</h1>
      <h1>{auth.password}</h1>
    </div>
  );
};

export default Temp;
