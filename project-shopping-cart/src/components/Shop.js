import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Shop(props) {
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
    // console.log(items.data);
  };

  return (
    <>
      <div>
        {/* Header*/}
        <header className="py-5 announce">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="text-center text-white ">
              <h1 className="display-4 fw-bolder">Today's store</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                Updates at 1 AM CET
              </p>
            </div>
          </div>
        </header>
        {/* Section*/}
        <section className="d-flex bg-light">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="d-flex justify-center flex-wrap">
              {items
                .sort((a, b) => b.store.cost - a.store.cost)
                .map((item) => {
                  if (item.store.cost === 0) {
                    // eslint-disable-next-line array-callback-return
                    return;
                  }
                  return (
                    <div className="col mb-5" key={item.itemId}>
                      <div className={`card h-100`}>
                        {/* Product image*/}
                        <img
                          className="card-img-top bg-info"
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
                              {item.store.cost.toLocaleString("en-US")}{" "}
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
                              <div className="btn btn-outline-dark mt-auto btn-lg">
                                Show in shop
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            <div
                              className="btn btn-outline-dark mt-auto btn-lg"
                              // onClick={() => {
                              //   addItemToCart();
                              // }}
                            >
                              Add to cart
                            </div>
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
        <footer className="py-5 nav">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Veanty 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
