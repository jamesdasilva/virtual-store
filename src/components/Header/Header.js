import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import blackCart from '../../images/cart.svg'
import whiteCart from '../../images/cart-white.svg'

const Header = () => {
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
          <div className='cart-icon'>
            <div className='cart-icon__count'>0</div>
            <img className='cart-icon__black-cart' src={blackCart} width={34} height={34} />
            <img className='cart-icon__white-cart' src={whiteCart} width={34} height={34} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
