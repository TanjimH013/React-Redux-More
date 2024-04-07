import { UserContext } from "../../context/user.context";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DrmLogo } from "../../assets/logo.svg";

import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <DrmLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">
            SHOP
          </Link>

          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
