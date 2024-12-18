import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(5, { message: "Error name" }).max(255),
  price: z.number().min(1).max(255),
});
const ReactHookForm = () => {
  const [Product, setProduct] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
    },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    setProduct([...Product, { ...data, id: Product.length + 1 }]);
  };
  const handleDelete = (id) => {
    setProduct(Product.filter((p) => p.id !== id));
  };
  const handlePrice = (id, newPrice) => {
    setProduct(
      Product.map((p) => (p.id === id ? { ...Product, price: newPrice } : p))
    );
  };
  return (
    <div className="h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col gap-5"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Name Here"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="age">Price</label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Enter Price Here"
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <div>
        {Product.map((items, i) => (
          <div className=" flex flex-row gap-5 " key={items.id}>
            <p>{items.id}</p>
            <p>{items.name}</p>
            <p>{items.price}</p>
            <button
              onClick={() => handleDelete(items.id)}
              className="border border-red-600 px-4 py-2"
            >
              Delete
            </button>
            <button onClick={()=>handlePrice(items.id,items.price+50)} className="bg-blue-400 px-4 py-2 text-white">
              Increment Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactHookForm;
