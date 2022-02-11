import "./styles.css";
import { Button } from "../Button";

export const Product = ({ product, handleClick }) => {
  return (
    <div className="product">
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div className="product--infos">
        <span className="product--name">{product.name}</span>
        <span className="product--category">{product.category}</span>
        <span className="product--price">R$ {product.price}</span>
        <Button className="product--button" onClick={() => handleClick(product.id)} >Adicionar</Button>
      </div>
    </div>
  );
};
