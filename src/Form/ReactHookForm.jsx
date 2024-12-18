import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters long" }).max(255),
  price: z.number().min(1, { message: "Price must be at least 1" }).max(100000),
});

const ReactHookForm = () => {
  const [Product, setProduct] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 200 },
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
      Product.map((p) =>
        p.id === id ? { ...p, price: newPrice } : p
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 shadow-lg rounded-lg max-w-md mx-auto flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Name Here"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 font-medium">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Enter Price Here"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && <p className="text-red-600 mt-1">{errors.price.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-5">Product List</h2>
        <div className="space-y-4">
          {Product.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-gray-700">ID: {item.id}</p>
                <p className="font-medium text-gray-600">Name: {item.name}</p>
                <p className="font-medium text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handlePrice(item.id, item.price + 50)}
                  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                >
                  Increment Price
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactHookForm;
