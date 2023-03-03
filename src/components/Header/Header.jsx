import React from 'react'
import './Header.css'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../store/StateProvider';

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/small/amazon_PNG25.png' />
      </Link>
      <div className="header__search">
        <input className='header__searchInput' type='text' placeholder='search amazon'/>
        < BsSearch className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <div className="header__navItem">
          <span className="header__navItemLineOne">
            Hello!
          </span>
          <span className="header__navItemLineTwo">
            Sign in
          </span>
        </div>
        <div className="header__navItem">
          <span className="header__navItemLineOne">
            Returns
          </span>
          <span className="header__navItemLineTwo">
            & Orders
          </span>
        </div>
        <div className="header__navItem">
          <span className="header__navItemLineOne">
            Your
          </span>
          <span className="header__navItemLineTwo">
            Prime
          </span>
        </div>
        <Link to='/checkout'>
          <div className="header__navItem header__navItemBasket">
            <AiOutlineShoppingCart className='header__navItemBasketIcon'/>
            <p className='header__navItemBasketCount'>{ basket?.length }</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header