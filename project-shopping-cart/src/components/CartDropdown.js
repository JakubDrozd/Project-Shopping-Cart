import React, { useState } from "react";

export function CartDropdown({ cart }) {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }

  function close() {
    setExpanded(false);
  }

  return (
    <div className="position-relative">
      <div className="dropdown" tabIndex={0} onClick={expand} onBlur={close}>
        <h1 className="display-3">
          <div className="button-wrapper">
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
        {expanded ? (
          <div className={"dropdown-options-list"}>
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
    </div>
  );
}
