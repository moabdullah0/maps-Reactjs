import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
const schema = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const AddProduct = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Product 1", price: "200", quantity: "20" },
    { id: 2, name: "Product 2", price: "500", quantity: "50" },
    { id: 3, name: "Product 3", price: "1000", quantity: "30" },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: schema });
  const onSubmit = (data) => {
    console.log(data);
    setProduct([...product, { ...data, id: product.length + 1 }]);
  };
  const handeDelete = (id) => {
    return setProduct(product.filter((product) => product.id !== id));
  };
  const handleChangePrice = (productId, newPrice) => {
    setProduct(
      product.map((product) =>
        product.id === productId ? { ...product, price: newPrice } : product
      )
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mx-5 shadow-md px-5 h-screen justify-center items-center"
      >
        <div className="flex gap-3 items-center">
          <label>Name:</label>
          <input
            className="border py-2 rounded-lg"
            placeholder="Enter Name Here"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex gap-3 items-center">
          <label>Price:</label>
          <input
            className="border py-2 rounded-lg"
            placeholder="Enter Name Here"
            {...register("price")}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex gap-3 items-center">
          <label>quantity:</label>
          <input
            className="border py-2 rounded-lg"
            placeholder="Enter Name Here"
            {...register("quantity", { valueAsNumber: true })}
          />
          {errors.name && <p>{errors.quantity.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
      {product.map((item, index) => (
        <div key={index} className="flex gap-3 items-center w-full">
          <div className="border w-[50%]">
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
          <button
            onClick={() => handeDelete(item.id)}
            className="border border-red-600 rounded-lg py-4 px-2 "
          >
            Delete
          </button>
          <button
            onClick={() =>
              handleChangePrice(item.id, parseInt(item.price) + 50)
            }
            className="border border-red-600 rounded-lg py-4 px-2 "
          >
            set Price
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddProduct;
