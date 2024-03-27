import React from "react";

import "./categories.style.scss";

const App = () => {
  const categories = [
    { id: 1, title: "Hates" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 3, title: "Mens" },
    { id: 1, title: "Womens" },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" img />
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
