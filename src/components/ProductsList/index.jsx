import { Product } from "../Product";
import "./styles.css";

export const ProductsList = ({ products, filteredProducts, handleClick }) => {
  return (
    <section>
      {filteredProducts.map((product) => (
        <Product product={product} handleClick={handleClick} key={product.id} />
      ))}
    </section>
  );
};
