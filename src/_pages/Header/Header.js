import React from 'react'
import './Header.css'
import logo from '../../_images/logo.svg'

const Header = ({ CartIcon }) => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className="header__logo">
          <img src={logo} width={70} height={70} />
        </div>
        <div className="header__mobile-title">
          <span>Os melhores produtos</span>
        </div>
        <div className="header__cart-icon">
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
