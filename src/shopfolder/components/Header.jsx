import React from 'react'
// import './App.css';

const Header = () => {
  return (
    <div>
        <div className='headersection'>
            <div className='left'>
                <div className='title'>
                    <h2>Shopping</h2>
                </div>
            </div>

            <div className='center'>
                <ul>
                    <li>Men</li>
                    <li>women</li>
                    <li>Beauty</li>
                    <li>Childern</li>
                </ul>

            </div>

            <div className="search">
                <input type="text" placeholder='search'/>



                
            </div>
            <div className='right'>
                <div className='sign'>

                  Signin/Signup

                </div>


                <div className="cart">Cart</div>
            </div>








        </div>






    </div>
  )
}

export default Header