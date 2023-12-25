import './Header.css'
import React from 'react'

function Header(props) {
    return (
        <div>
            <div className='headContainer'>
                <div className='left'>
                    <img src="https://flowbite.com/docs/images/logo.svg"></img>
                    <h2>Rishiyam</h2>
                </div>
                <div className='mid'>
                    <ul>
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                           <a>Mobile</a>
                        </li>
                        <li>
                           <a>Men</a>
                        </li>
                        <li>
                           <a>Female</a>
                        </li>
                        <li>
                           <a>Electronics</a>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                 <button id="getStarted"><span class="material-symbols-outlined">
                 shopping_cart
                 </span>
                  </button>
                  <span className='npOfItems'>{props.setItemNo}</span>
               
                </div>
            </div>
        </div>
    )
}

export default Header;
