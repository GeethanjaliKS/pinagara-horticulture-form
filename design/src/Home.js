import React from 'react'
import About from './About'
import Footer from './Footer'
import Team from './Team'
import Foodcard from './Foodcard'
import Fertilizercart from './Fertilizercart'
import CarouselExample from './Carousel'
import Opening from './Opening'

function Home() {
  return (
    <div>
      <CarouselExample/>
<About/>
<Team/>
<Foodcard/>
<Fertilizercart/>
{/* <Opening/> */}


    </div>
  )
}

export default Home