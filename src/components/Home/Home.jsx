import React from 'react'
import './Home.css'
import homeHeroImage from '../../assets/home-hero-image.jpg'
import Product from './CardUi/Product'
import ProductCard from './CardUi/ProductCard'
import QuadCard from './CardUi/QuadCard'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image' src={homeHeroImage} alt='hero'/>
        
        <div className="home__row">
          {/* <ProductCard 
            title='Deals & Promotions'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg'
            buttonText='Shop now'
          />
          <QuadCard />
          <ProductCard /> */}
          <Product id='1' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/61mQzH1c9eL._AC_SY200_.jpg'/>
          <Product id='2' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/71tK21fYkDL._AC_UL320_.jpg'/>
          <Product id='3' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/61mQzH1c9eL._AC_SY200_.jpg'/>
          <Product id='4' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/71tK21fYkDL._AC_UL320_.jpg'/>
        </div>

        <div className="home__row">
          <Product id='5' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/61mQzH1c9eL._AC_SY200_.jpg'/>
          <Product id='6' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/71tK21fYkDL._AC_UL320_.jpg'/>
        </div>

        <div className="home__row">
          <Product id='7' title='Learn react in 3 months' price='19.99' rating={3} image='https://m.media-amazon.com/images/I/71tK21fYkDL._AC_UL320_.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Home