import "./styles.css";
import { Button } from "../Button";
import { useState } from "react";

export const InputSearch = ({ products, filteredProducts, setFilteredProducts }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (inputValue) => {
    const value = inputValue.toLowerCase();
    if (inputValue === "") {
      setFilteredProducts([...products]);
    } else {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value)
        )
      );
    }
  };

  return (
    <div className="search--div">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Digitar Pesquisa"
      />
      <Button onClick={() => handleInput(inputValue)} className="search--button">
        Pesquisar
      </Button>
    </div>
  );
};
