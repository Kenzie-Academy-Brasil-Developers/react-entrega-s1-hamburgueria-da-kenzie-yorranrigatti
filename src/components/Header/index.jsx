import "./styles.css"
import { Logo } from "../Logo"
import { InputSearch } from "../InputSearch"

export const Header = ({products, filteredProducts,setFilteredProducts}) => {
    return (
      <header>
        <Logo />
        <InputSearch
          products={products}
                setFilteredProducts={setFilteredProducts}
                filteredProducts={filteredProducts}
        />
      </header>
    );
}