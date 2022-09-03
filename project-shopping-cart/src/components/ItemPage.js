import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//App
export function ItemPage() {
  const params = useParams();

  useEffect(() => {
    fetchItem();
    console.log(params);
  }, []);

  const [item, setItem] = useState({
    images: {},
    ratings: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  return (
    <div>
      <section className="py-5 bg-info">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={item.images.background}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">ID: {item.costmeticId}</div>
              <h1 className="display-5 fw-bolder">{item.name}</h1>
              <div className="fs-5 mb-5 d-flex align-items-center">
                <span>
                  {item.obtained}{" "}
                  <img
                    src={require("../images/coins.png")}
                    width="10%"
                    height="10%"
                    alt="coin"
                  ></img>
                </span>
              </div>
              <p className="lead">{item.description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 nav">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Veanty 2022</p>
        </div>
      </footer>{" "}
    </div>
  );
}
