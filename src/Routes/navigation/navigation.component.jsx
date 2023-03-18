import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CardItem from "../../component/card-item/card-item.component";
import CardDropDown from "../../component/card-dropDown/cardDropDown";

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
  const {inCartopen}=useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardItem />
        </div>

        {inCartopen && <CardDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
