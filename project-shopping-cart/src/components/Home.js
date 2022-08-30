import { useEffect, useState } from "react";

export function Home() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/items/popular"
    );
    const items = await data.json();
    setItems(items.entries[1].entries);
    console.log(items.entries[1].entries);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="home-container p-3">
      <h1 style={{ textAlign: "center" }}>This week's favorites</h1>
      <h5
        style={{ fontStyle: "italic", fontSize: "1rem", textAlign: "center" }}
      >
        *Based on community's rating
      </h5>
      <div className="card-deck d-flex justify-content-around gap-5 flex-wrap">
        {items
          .sort((a, b) => b.ratings.avgStars - a.ratings.avgStars)
          .map((item) => {
            if (item.name === "Randomize") {
              return;
            }
            return (
              <div className="card" key={item.identifier}>
                <img
                  src={item.images.transparent}
                  alt={item.name}
                  onerror={require("../images/generic-image-placeholder.png")}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted text-center">
                    {item.ratings.avgStars} ⭐
                  </small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
