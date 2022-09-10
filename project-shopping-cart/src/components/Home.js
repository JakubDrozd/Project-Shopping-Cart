import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";

//Home component
export function Home({ handleClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/items/popular"
    );
    const items = await data.json();
    setItems(items.entries[1].entries);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
    console.log(items);
  }, []);

  return (
    <div>
      {/* Header*/}
      <header className="arena py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">This week's favorites</h1>
            <p className="lead fw-normal text-white-80 mb-0">
              (By community's ratings)
            </p>
          </div>
        </div>
      </header>
      <section className="py-5 arena">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {isLoading ? (
              <Loader></Loader>
            ) : (
              items.map((item) => {
                if (item.name === "Randomize") {
                  return null;
                }
                return (
                  <div className="col mb-5" key={item.identifier}>
                    <div className="card h-100 store-item">
                      {/* Product image*/}
                      <Link to={`/${item.identifier}`}>
                        <img
                          className="card-img-top bg-info"
                          src={item.images.transparent}
                          alt={item.name}
                        />
                      </Link>
                      {/* Product details*/}
                      <div className="card-body p-0">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder display-5">{item.name}</h5>
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <h1 className="display-4">
                          <div className="button-wrapper w-100 text-nowrap">
                            <div
                              className="button-inner"
                              onClick={() => {
                                handleClick(item);
                              }}
                            >
                              Add to cart
                            </div>
                          </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="store-nav d-flex justify-content-around align-items-center p-3">
        <h3 className="m-0 text-center text-white display-5">
          Copyright © Veanty 2022
        </h3>
      </footer>
    </div>
  );
}
