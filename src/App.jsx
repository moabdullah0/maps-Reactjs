import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./inSession/Temp";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
