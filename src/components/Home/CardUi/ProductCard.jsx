import React from 'react'
import './ProductCard.css'

const ProductCard = ({ title, image, buttonText }) => {
  return (
    <div className='productCard'>
        <p className="productCard__title">{title}</p>
        <img src={image} alt='Product card'/>
        <button>{buttonText}</button>
    </div>
  )
}

export default ProductCard