import React from 'react'
import { useStateValue } from '../../../../store/StateProvider'
import './Product.css'

const Product = ({ id,title,price,rating,image, }) => {
  const [state, dispatch] = useStateValue();

  // console.log("This is a basket:", state.basket);
  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <div className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product__rating">
                {[...Array(rating)].map((star) => {
                  return(
                    <p key={star}>🌟</p>
                  )
                })}
                {/* <p>🌟</p> */}
                {/* <p>🌟</p> */}
                {/* for (let i = 0; i < rating.length; i++) {
                  const element = array[i];
                  
                } */}
            </div>
        </div>
        <div className="product__image">
          <img src={image}/>
        </div>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product