import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

//Dropdown component
export function CartDropdown({ cart }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <h1 className="display-3">
        <div
          className="button-wrapper"
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
        >
          <div className="button-inner">
            <div className="button-inner material-symbols-outlined cart ">
              shopping_cart
            </div>
          </div>
        </div>
      </h1>

      {showMenu ? (
        <div className="menu">
          <button>Menu Item 1</button>
          <button>Menu Item 2</button>
          <button>Menu Item 3</button>
        </div>
      ) : null}
    </>
  );
}
