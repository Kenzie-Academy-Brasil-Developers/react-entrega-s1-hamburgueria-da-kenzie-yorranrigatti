import "./styles.css";
import { Button } from "../Button";

export const CartProduct = ({ product, handleClick}) => {
  

  return (
    <div className="cart--product">
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div className="cart--product--infos">
        <span className="cart--product--name">{product.name}</span>
        <span className="cart--product--category">{product.category}</span>
      </div>
      <Button onClick={handleClick} className="cart--product--button">
        Remover
      </Button>
    </div>
  );
};
