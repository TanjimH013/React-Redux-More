import React from "react";

import "./categories.style.scss";

const App = () => {
  const categories = [
    { id: 1, title: "Hates", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/Jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    { id: 4, title: "Mens", imageUrl: "https://i.ibb.co/R70vBrQ/men.png" },
    { id: 5, title: "Womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png" },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Shope Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
