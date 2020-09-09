import React from 'react';
import styles from './HeaderComponent.module.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const HeaderComponent = () => {
  const [state,dispatch] = useStateValue();

  return(
           // BEM Convention
    <div className={styles.header}>
    <img
    className="header__logo"
    src=""
      />
      <div
      className="header__searchInput" type="text" >
      </div>
      <div className={styles.header__nav}>
        <div className="header__component">
          <span className="header__optionLineOne">
            Hello Guest
          </span>
          <span className="header__optionLineTwo">
            Sign In
          </span>
        </div>
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

        <div className={styles.header__optionBasket}/>
       <Link to="/checkout"><ShoppingBasketIcon/> 
  <div className={styles.header__BasketCount}>{state.basket?.length}</div>
       </Link>
      </div>
  </div>
    )
}

export default HeaderComponent;
