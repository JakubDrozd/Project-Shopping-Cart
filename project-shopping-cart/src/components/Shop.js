import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    setItems(items.data);
    console.log(items.data);
  };

  return (
    <>
      <div>
        {/* Header*/}
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Today's store</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                Updates at 1 AM CET
              </p>
            </div>
          </div>
        </header>
        {/* Section*/}
        <section className="py-5 bg-light">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {items.map((item) => {
                if (item.item.images.background === undefined) {
                  return;
                }
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={item.item.images.background}
                        alt="#"
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{item.item.name}</h5>
                          {/* Product price*/}
                          <h5>
                            {item.store.cost}{" "}
                            <img
                              src={require("../images/coins.png")}
                              width={"40%"}
                              height={"40%"}
                              alt={item.item.name}
                            ></img>
                          </h5>
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link to={`/${item.itemId}`}>
                            <div className="btn btn-outline-dark mt-auto">
                              Show in shop
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
