import React from "react";

import "./categories.style.scss";

const App = () => {
  const categories = [
    { id: 1, title: "Hates" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Mens" },
    { id: 5, title: "Womens" },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" img />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shope Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
