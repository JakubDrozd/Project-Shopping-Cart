import React, { useState } from "react";
import { Link } from "react-router-dom";

export function CartDropdown({ cart }) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="dp" onClick={() => setOpen(!open)} onBlur={() => close()}>
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
      {open ? (
        <div className="dp-menu bg-info">
          {cart.map((item) => {
            return (
              <Link to={`/${item.itemId}`}>
                <li
                  className="bg-light text-dark"
                  key={item.itemId}
                  style={{ listStyle: "none" }}
                >
                  <div className="cart-item d-flex justify-content-start align-items-center gap-3">
                    <img
                      src={item.item.images.background}
                      alt={item.item.name}
                      width="30%"
                    />
                    <div className="main-info d-flex flex-column gap-2">
                      <h4>{item.item.name}</h4>
                      <h4>
                        {item.store.cost}{" "}
                        <img
                          src={require("../images/coins.png")}
                          alt="coins"
                          width={"20%"}
                          height="auto"
                        />
                      </h4>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
          <div className="cart-cost d-flex justify-content-center align-items-center gap-3">
            <h4>
              {cart.reduce((sum, item) => {
                return sum + item.store.cost;
              }, 0)}
              <img
                src={require("../images/coins.png")}
                alt="coins"
                width={"20%"}
                height="auto"
              />
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}
