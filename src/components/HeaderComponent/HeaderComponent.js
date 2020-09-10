import React from 'react';
import './HeaderComponent.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from 'firebase';

const HeaderComponent = () => {
  const [state,dispatch] = useStateValue();
  const handleAuthentication=() =>{
    if(state.user){
      auth.signOut();
    }
  }
  return(
           // BEM Convention
    <div className="header">
      <div className="header__nav">
      <div className="header__search">
        <Link to="/">
          <img
          className="header__logo"
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          />
        </Link>  
          <input
          className="header__searchInput" type="text" placeholder="Search"/>
        </div>
        <Link to={!state.user && "/login"}> 
            <div onClick={handleAuthentication} className="header__component">
              <span className="header__optionLineOne">
                Hello Guest
              </span>
              <span className="header__optionLineTwo">
      {state.user?'Sign Out' : 'Sign In'}
              </span>
            </div>
        </Link>
        <div className="header__component">
        <span className="header__optionLineOne">
            Return
          </span>
          <span className="header__optionLineTwo">
            Order
          </span>
        </div>
        <div className="header__component">
        <span className="header__optionLineOne">
            Run
          </span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>

        <div className="header__component">
       <Link to="/checkout"><ShoppingBasketIcon/> 
  <div className="header__BasketCount">{state.basket?.length}</div>
       </Link>
       </div>
      </div>
  </div>
    )
}

export default HeaderComponent;
