import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
// import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      {/* <CategoryList/> */}
      <BannerProduct/>
      <CategoryList/>

      {/* <HorizontalCardProduct category={"airpodes"} heading={"Top's airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/> */}
      <VerticalCardProduct category={"airpodes"} heading={"Top's airpodes"}/>
      <VerticalCardProduct category={"watches"} heading={"Popular's Watches"}/>
      <VerticalCardProduct category={"wemen fashion"} heading={"wemen fashion"}/>
      <VerticalCardProduct category={"shoes"} heading={"shoes"}/>
      <VerticalCardProduct category={"dersses"} heading={"dersses"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"wemen bags"} heading={"wemen bags"}/>
      <VerticalCardProduct category={"men fashion"} heading={"popular Men fashion"}/>
      <VerticalCardProduct category={"kids fashion"} heading={"Kids fashion"}/>
      <VerticalCardProduct category={"men bags"} heading={"men bags"}/>
  
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"boy fashion"} heading={"boy fashion"}/>
      <VerticalCardProduct category={"girl fashion"} heading={"girl fashion"}/>
    
      <VerticalCardProduct category={"jackiet"} heading={"jackiet"}/>
      <VerticalCardProduct category={"camera"} heading={"camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"earphones"}/>
      <VerticalCardProduct category={"mobiles"} heading={"mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      
     
    </div>
  )
}

export default Home

