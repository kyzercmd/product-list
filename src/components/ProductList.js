import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products/");

  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products/")}>
          Show All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          Only In Stock
        </button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In Stock" : "Out of stock"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
