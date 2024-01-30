import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

const Header: FC = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__body">
        <div className="header__nav">
          <Link
            to="/"
            className={`header__btn-cats ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span className="header__btn-text">Все котики</span>
          </Link>
          <Link
            to="/favorites"
            className={`header__btn-favorites ${
              location.pathname === "/favorites" ? "active" : ""
            }`}
          >
            <span className="header__btn-text">Любимые котики</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
