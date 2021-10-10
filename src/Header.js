import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/512/Home-icon.png"
                />
            </Link>
          

            <div className="header__search">
                <input
                className="header__searchInput"
                type="text" />
                <img className="header__searchIcon"
                src="https://img.icons8.com/material-rounded/24/000000/search.png"/>
            </div>
            
            <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
                
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <img src="https://img.icons8.com/emoji/48/000000/basket.png"/>
                    <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;