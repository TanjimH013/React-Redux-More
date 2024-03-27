import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shope Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
