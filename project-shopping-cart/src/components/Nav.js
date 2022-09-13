import { Link } from "react-router-dom";
import { CartDropdown } from "./CartDropdown";
// import {Button} from "bootstrap//BUtton"
//
export function Nav({ cart }) {
  return (
    <nav className="store-nav d-flex justify-content-around align-items-center p-3 sticky-top">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="display-4">
          <li style={{ listStyle: "none" }} className="navbar-item">
            <div className="button-wrapper">
              <div className="button-inner">Home</div>
            </div>
          </li>
        </h1>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="display-4">
          <li style={{ listStyle: "none" }} className="navbar-item">
            <div className="button-wrapper">
              <div className="button-inner">Store</div>
            </div>
          </li>
        </h1>
      </Link>
      <CartDropdown cart={cart}></CartDropdown>
    </nav>
  );
}
