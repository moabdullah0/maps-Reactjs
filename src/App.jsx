// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 500 },
//     { id: 3, name: "Headphones", price: 150 },
//   ]);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const handleChangePrice = (productId, newPrice) => {
//     setProducts(
//       products.map((product) =>
//         product.id === productId ? { ...product, price: newPrice } : product
//       )
//     );
//   };

//   const handleDeleteProduct = (productId) => {
//     setProducts(products.filter((product) => product.id !== productId));
//   };

//   const handleAddProduct = (data) => {
//     const newProductObj = {
//       id: products.length + 1,
//       name: data.name,
//       price: parseFloat(data.price),
//     };

//     setProducts([...products, newProductObj]);
//     reset();
//   };

//   return (
//     <div className="p-5">
//       <form
//         onSubmit={handleSubmit(handleAddProduct)}
//         className="mb-6 space-y-4 max-w-xl mx-auto"
//       >
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Product Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             {...register("name", { required: "Product name is required" })}
//             className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter product name"
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name.message}</span>
//           )}
//         </div>
//         <div>
//           <label
//             htmlFor="price"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             {...register("price", {
//               required: "Price is required",
//               valueAsNumber: true,
//               min: {
//                 value: 1,
//                 message: "Price must be a positive number",
//               },
//             })}
//             className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter product price"
//           />
//           {errors.price && (
//             <span className="text-red-500 text-sm">{errors.price.message}</span>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="px-6 py-2 mt-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
//         >
//           Add Product
//         </button>
//       </form>

//       <ul className="space-y-4 max-w-4xl mx-auto">
//         {products.map((product) => (
//           <li
//             key={product.id}
//             className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 rounded shadow-md"
//           >
//             <span className="text-lg font-semibold sm:text-xl">
//               {product.name} - ${product.price}
//             </span>
//             <div className="mt-3 sm:mt-0 sm:flex space-x-2">
//               <button
//                 onClick={() =>
//                   handleChangePrice(product.id, product.price + 50)
//                 }
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//               >
//                 Increase Price
//               </button>
//               <button
//                 onClick={() => handleDeleteProduct(product.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React from "react";


import ReactHookForm from "./Form/ReactHookForm";

const App = () => {
  return (
    <div>
      <ReactHookForm />
    </div>
  );
};

export default App;
