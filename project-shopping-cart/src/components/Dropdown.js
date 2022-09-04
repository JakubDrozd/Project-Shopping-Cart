import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";

//Dropdown component
export function CartDropdown({ items }) {
  useEffect(() => console.log(items), []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="d-flex align-items-center arena text-white">
        <span className="material-symbols-outlined cart">shopping_cart</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/cart">
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.ItemText>Go to checkout</Dropdown.ItemText>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}
