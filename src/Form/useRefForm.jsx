import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const schema = z.object({
  title: z
    .string()
    .min(5, { message: "Name is too short" })
    .max(255, { message: "Please enter a valid name " }),
  price: z.number().min(5).max(1025),
});
const UseRefForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [dataState, setData] = useState([
    {
      id: 0,
      title: "Product 1",
      price: 500,
    },
    {
      id: 1,
      title: "Product 2",
      price: 1000,
    },
  ]);
  const onSubmit = (data) => {
    setData([...dataState, { ...data, id: dataState.length + 1 }]);
  };
  const handleDelete = (id) => {
    setData(
      dataState.filter((product) => {
        product.id !== id;
      })
    );
  };

  const handleChangePrice = (productId, newPrice) => {
    setData(
      dataState.map((product) =>
        product.id === productId ? { ...product, price: newPrice } : product
      )
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex gap-3">
          <label htmlFor="">Title Product</label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("title")}
            className="border border-black rounded-sm focus:outline-none"
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("price", { valueAsNumber: true })}
            className="border border-black rounded-sm focus:outline-none"
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>

        <button className="bg-blue-500 text-white font-bold px-4 py-2 ">
          Submit
        </button>
      </form>
      {dataState.map((data, i) => (
        <ul className="border flex gap-5 mb-5" key={i}>
          <li>{data.id}</li>
          <li>{data.title}</li>
          <li>{data.price}</li>
          <button
            onClick={() => handleDelete(data.id)}
            className="border border-red-500 px-4 py-1 rounded-lg"
          >
            Delete
          </button>
          <button
            onClick={() => handleChangePrice(data.id, data.price + 50)}
            className="border border-blue-500 px-4 py-1 rounded-lg"
          >
            Change Price
          </button>
        </ul>
      ))}
    </div>
  );
};

export default UseRefForm;
