import "./styles.css";
import { Button } from "../Button";

export const CartTotal = ({ currentSale, setCurrentSale }) => {
  const result = currentSale.reduce((acc, cur) => {
    return acc + Number(cur.price);
  }, 0);
  return (
    <div className="cart--total">
      <div>
        <p>Total</p>
        <span>RS {result}</span>
      </div>
      <Button onClick={() => setCurrentSale([])} className="remove--all">
        Remover todos
      </Button>
    </div>
  );
};
