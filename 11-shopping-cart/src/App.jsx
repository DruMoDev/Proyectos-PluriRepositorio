import { useState } from "react";
import { Products } from "./components/Products.jsx";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header.jsx";

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 30
  });

function filterProducts(products) {
  return products.filter(product => {
    return (
      product.price >= filters.minPrice && (
        filters.category === "all" ||
        product.category === filters.category
      )
    )
  })
}

  return (
    <>
      
      <Header filter={setFilters}></Header>
      <Products products={filterProducts(products)}></Products>
     
    </>
  );
}

export default App;
