import { Link } from "react-router-dom";
import { CartDropdown } from "./CartDropdown";
// import {Button} from "bootstrap//BUtton"

export function Nav({ cart }) {
  return (
    <nav className="nav">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <CartDropdown cart={cart}></CartDropdown>
    </nav>
  );
}
