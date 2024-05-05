import { useNavigate } from "react-router-dom";

import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h1>{title}</h1>
        <p>Shope Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
