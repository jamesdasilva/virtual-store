import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import logo from '../../_images/logo.svg'

const Header = ({ CartIcon }) => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className="header__logo">
          <img src={logo} />
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

Header.propTypes = {
  CartIcon: PropTypes.object
}

export default Header
