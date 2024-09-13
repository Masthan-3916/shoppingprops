import React, { useState } from 'react'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import { Gents, Ladies } from '../../data'
import CollectionWomen from '../components/CollectionWomen'





const MainPage = () => {
  const[GentsFashion,setGentsFashion]=useState(Gents)
  const[WomenFashion,setWomenFashion]=useState(Ladies)
  console.log(Gents)
  return (
    <div>

        <Header/>
        <Banner/>
        <Collections GentsFashion={GentsFashion}/>
        <CollectionWomen WomenFashion={WomenFashion}/>
       
        <Footer/>


    </div>
  )
}

export default MainPage