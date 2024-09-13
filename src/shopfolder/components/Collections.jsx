import React from 'react'

const Collections = (props) => {
  const{title,image1,image2,image3,image4,image5,image6,image7,image8}=props.GentsFashion
  return (<>
    <h1>{title}</h1>
    <div className='menimages'>
        <img src={image1} alt="Fashion item 1" />
        <img src={image2} alt="Fashion item 2" />
        <img src={image3} alt="Fashion item 3" />
        <img src={image4} alt="Fashion item 4" />
        <img src={image5} alt="Fashion item 5" />
        <img src={image6} alt="Fashion item 6" />
        <img src={image7} alt="Fashion item 7" />
       
      </div>
   
    </>
  
  )
}

export default Collections