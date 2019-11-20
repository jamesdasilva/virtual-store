import React from 'react'
import PropTypes from 'prop-types'
import './FeedbackMessage.css'

const FeedbackMessage = ({ show, onClose }) => {
  return (
    <div className={`fdback-msg${show ? '--show' : ''}`}>
      <div className='fdback-msg__content'>
        <div className='fdback-msg__text'>Produto adicionado ao carrinho com sucesso!</div>
        <div className='fdback-msg__close-icon' onClick={onClose}>X</div>
      </div>
    </div>
  )
}

FeedbackMessage.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
}

export default FeedbackMessage
