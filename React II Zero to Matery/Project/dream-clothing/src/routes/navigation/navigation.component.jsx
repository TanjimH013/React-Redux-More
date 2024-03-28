import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>LOgo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
