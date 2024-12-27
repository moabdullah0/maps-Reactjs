import React, { useState } from "react";
import InputFiled from "../shared/UI/InputProps";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  title: z.string().min(5).max(255),
  email: z.string().email(),
});
const UseStateComponent = () => {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    setData(data);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <InputFiled
            type={"text"}
            label={"Enter Title"}
            regiser={register}
            id={"title"}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <InputFiled
            type={"email"}
            label={"Enter Email"}
            regiser={register}
            id={"email"}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <div>
            <button className="text-white font-bold text-lg bg-blue-400 mt-3 mb-3 px-4 py-2 rounded-lg hover:bg-blue-300">
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 p-3 bg-gray-100 rounded text-gray-700">
          <span className="font-medium flex flex-col gap-5">Output:</span>{" "}
          <h1>{data.title || "No input yet"}</h1>
          <h1>{data.email || "No input yet"}</h1>
        </div>
      </div>
    </div>
  );
};

export default UseStateComponent;
