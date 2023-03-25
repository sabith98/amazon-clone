import React from 'react'
import './Header.css'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../store/StateProvider';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    signOut(auth)
      .then(() => {
        // sign out succcess
      }).catch ((error) => {
        // error
      })
  }

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
        <Link to={!user && '/login'} >
          <div onClick={handleAuthentication} className="header__navItem">
            <span className="header__navItemLineOne">
              Hello!
            </span>
            <span className="header__navItemLineTwo">
              { user ? 'Sign Out' : 'Sign In' }
            </span>
          </div>
        </Link>
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