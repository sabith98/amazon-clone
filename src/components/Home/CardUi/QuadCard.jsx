import React from 'react'
import './QuadCard.css'

const QuadCard = () => {
  return (
    <div className='quadcard'>
        <div className="quadcard__header">
            <p className="quadcard__title">Gaming accessories</p>
        </div>

        <div className="quadcard__body">
            <div className="quadcard__row">
                <div className="quadcard__category">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'/>
                    <p>Headsets</p>
                </div>
                <div className="quadcard__category">
                    <img className='quadcard__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'/>
                    <p>Keyboards</p>
                </div>
            </div>
            
            <div className="quadcard__row">
                <div className="quadcard__category">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'/>
                    <p>Headsets</p>
                </div>
                <div className="quadcard__category">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'/>
                    <p>Keyboards</p>
                </div>
            </div>
        </div>
        
        <div className="quadcard__footer">
            <button>See more</button>
        </div>
    </div>
  )
}

export default QuadCard