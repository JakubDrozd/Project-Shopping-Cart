import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";

//Dropdown component
export function CartDropdown({ items }) {
  useEffect(() => console.log(items), []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary d-flex align-items-center">
        <span className="material-symbols-outlined cart">shopping_cart</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Link to="/cart">
          <Dropdown.Item>Go to checkout</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}
