import React from 'react'
import { useStateValue } from '../../../store/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
        {/* Checkout left */}
        <div className="checkout__left">
            <h2 className="checkout__title">
                Your shopping basket
            </h2>
            {/* BasketItem */}
            {
              basket.map( item => (
                <CheckoutProduct 
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ) )
            }
            {/* <CheckoutProduct /> */}
            {/* BasketItem */}
            {/* BasketItem */}
        </div>

        {/* Checkout right */}
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout