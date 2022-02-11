import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {return setProducts(res), setFilteredProducts(res);});
  }, []);

  // useEffect(() => {
  //   if (filteredProducts.length > 0) {
  //     setProducts(filteredProducts)
  //   }
  // }, [filteredProducts])

  const handleClick = (productId) => {
    const finded = products.find((element) => element.id === productId);
    if (currentSale.find((element) => element.id === productId) === undefined) {
      return setCurrentSale([...currentSale, finded]);
    }
  };

  return (
    <div className="App">
      <Header products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
      <main>
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
}

export default App;
