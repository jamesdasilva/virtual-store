import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className="header__logo">
          <img src={logo} width={70} height={70} />
        </div>
        <div className="header__cart-icon">
          <div className='cart-icon'>
            <div className='cart-icon__count'>0</div>
            <img src={cart} width={34} height={34} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
