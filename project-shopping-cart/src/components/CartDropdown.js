import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";

//Dropdown component
export function CartDropdown({ cart }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="d-flex align-items-center arena text-white">
        <span className="material-symbols-outlined cart">shopping_cart</span>
        <span className="border-info rounded-circle">{cart.length}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="selected-items">
        {cart.map((item) => {
          return (
            <div key={item.itemId} className="selected-item">
              <Link to={`/${item.itemId}`}>
                <h4>
                  <img
                    src={item.item.images.icon}
                    alt={item.item.name}
                    className="mw-100 mh-100"
                  ></img>
                  {item.item.name}
                </h4>
              </Link>
            </div>
          );
        })}

        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.ItemText className="text-decoration-none">
          <h3>
            {cart.reduce((total, item) => {
              return total + item.store.cost;
            }, 0)}{" "}
            <img src={require("../images/coins.png")} width={"30%"}></img>
          </h3>
        </Dropdown.ItemText>
        <Link to="/cart">
          <Dropdown.ItemText className="text-decoration-none">
            <h5>Go to checkout</h5>
          </Dropdown.ItemText>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}
