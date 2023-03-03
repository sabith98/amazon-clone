import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../store/StateProvider'
import { getBasketTotal } from '../../../store/reducer'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <p>
            Subtotal ({ basket?.length } items):
            <strong>
                <CurrencyFormat 
                    value={ getBasketTotal(basket) }
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                />
            </strong>
        </p>
        <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
        </small>
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal