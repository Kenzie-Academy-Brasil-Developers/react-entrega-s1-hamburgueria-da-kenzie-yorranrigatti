import "./styles.css";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export const Cart = ({ currentSale, setCurrentSale }) => {

  const handleClick = (productId) => {
    setCurrentSale(currentSale.filter(product => product.id !== productId));
  };

  return (
    <aside>
      <div className="cart--header">
        <p>Carrinho de compras</p>
      </div>
      {currentSale.length === 0 ? (
        <div className="cart--body--empty">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div className="cart-body--non-empty">
          {currentSale.map((product) => {
            return (
              <CartProduct
                product={product}
                handleClick={() => handleClick(product.id)}
                key={product.id}
              />
            );
          })}
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      )}
    </aside>
  );
};
