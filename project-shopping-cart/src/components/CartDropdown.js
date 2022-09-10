import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//Dropdown component
export function CartDropdown({ cart }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => console.log(cart), [cart]);

  return (
    <div className="position-relative">
      <h1 className="display-3">
        <div
          className="button-wrapper"
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
        >
          <div className="button-inner">
            <div className="cart-text d-flex gap-2">
              <span className="button-inner material-symbols-outlined cart ">
                shopping_cart
              </span>
              <div>
                <h2 className="rounded-circle border border-info p-2 bg-info">
                  {cart.length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </h1>
      {showMenu ? (
        <div className="menu position-absolute">
          {cart.map((item) => {
            return (
              <div
                className="cart-item bg-light d-flex flex-column"
                key={item.itemId}
              >
                <div className="cart-item-img">
                  <img
                    src={item.item.images.background}
                    alt={item.itemId}
                    width={"50%"}
                    height={"50%"}
                  />
                </div>
                <div className="cart-item-name">{item.item.name}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
