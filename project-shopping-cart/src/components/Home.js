import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
//
//Home component
export function Home({ handleClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    setItems(items.data);
    setIsLoading(false);
    // console.log(items.data);
    //
  };

  useEffect(() => {
    fetchItems();
    console.log(items);
  }, [items]);

  return (
    <div>
      {/* Header*/}
      <header className="arena py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-2 fw-bolder">This week's favorites</h1>
            <h1 className="lead fw-normal text-white-80 mb-0 display-5">
              <i>(By community's ratings)</i>
            </h1>
          </div>
        </div>
      </header>
      <section className="py-5 arena">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {isLoading ? (
              <Loader></Loader>
            ) : (
              items
                .sort(
                  (a, b) =>
                    b.item.ratings.totalPoints - a.item.ratings.totalPoints
                )
                .slice(0, 9)
                .map((item) => {
                  if (item.store.cost === 0) {
                    return null;
                  } else {
                    return (
                      <div className="col mb-5" key={item.itemId}>
                        <div className="card h-100 store-item">
                          {/* Product image*/}
                          <div className="card-image">
                            <Link to={`/${item.itemId}`}>
                              <img
                                className="card-img-top bg-info"
                                src={item.item.images.background}
                                alt={item.item.name}
                              />
                            </Link>
                          </div>
                          {/* Product details*/}
                          <div className="card-body p-0">
                            <div className="text-center">
                              {/* Product price*/}
                              <span className="d-flex justify-content-center align-items-center text-white pt-1 price">
                                {item.store.cost.toLocaleString("en-US")}{" "}
                                <img
                                  src={require("../images/coins.png")}
                                  alt="coins"
                                  width={"10%"}
                                ></img>{" "}
                              </span>
                              {/* Product name*/}
                              <h5 className="fw-bolder display-5 pt-4">
                                {item.item.name}
                              </h5>
                              <div className="d-flex justify-content-center align-items-center">
                                <h4>{item.item.ratings.avgStars} ⭐</h4>
                                <h4>({item.item.ratings.numberVotes} votes)</h4>
                              </div>
                            </div>
                          </div>
                          {/* Product actions*/}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <h1 className="display-4">
                              <div className="button-wrapper w-100">
                                <div
                                  className="button-inner text-nowrap"
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
                  }
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
