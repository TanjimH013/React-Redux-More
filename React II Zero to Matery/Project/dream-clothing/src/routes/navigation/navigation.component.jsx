import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DrmLogo } from "../../assets/logo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <DrmLogo className="logo" />
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
