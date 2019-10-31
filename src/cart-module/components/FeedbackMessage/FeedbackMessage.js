import React from 'react'
import './FeedbackMessage.css'

const FeedbackMessage = () => {
  return (
    <div className='fdback-msg'>
      <div className='fdback-msg__content'>
        <div className='fdback-msg__text'>Produto adicionado ao carrinho com sucesso!</div>
        <div className='fdback-msg__close-icon'>X</div>
      </div>
    </div>
  )
}

export default FeedbackMessage
