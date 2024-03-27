import React from "react";
import Directory from "./components/directory/directory";

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
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
