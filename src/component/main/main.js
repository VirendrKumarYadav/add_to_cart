import React, {useState} from 'react'
import './main.css'
import Item from '../items/Item'

const PassLen = (props) => {
  const [totalPrice, setPrice]=useState(2600.54);
  const [noOfItems, setItems]=useState(1);

  let loadNoOfItemsIn=(args)=>{
     setPrice(totalPrice+args);
    //  setItems(noOfItems+1);
     props.onLoadItems(1)
  }
let loadNoOfItemsDec=(args)=>{
   setPrice(totalPrice-args);
  //  setItems(noOfItems-1);
   props.onLoadItems(-1)
}


  return (
    <div className='main'>
      <h1 className='addToCart'>Add To Cart</h1>
      <Item itemName="Apple  iPhone 15(128) " price="900.54" src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg" loadIncItem={loadNoOfItemsIn} loadDescItem={loadNoOfItemsDec}></Item>
      <Item itemName="Samsung Galaxy  S8" price="399.99" src="https://www.course-api.com/images/cart/phone-2.png" loadIncItem={loadNoOfItemsIn} loadDescItem={loadNoOfItemsDec}></Item>
      <Item itemName="Xiaomi Redmi Note2" price="699.99" src="https://www.course-api.com/images/cart/phone-3.png" loadIncItem={loadNoOfItemsIn} loadDescItem={loadNoOfItemsDec}></Item>
      <Item itemName="Samsung Galaxy  S7" price="599.99" src="https://www.course-api.com/images/cart/phone-4.png" loadIncItem={loadNoOfItemsIn} loadDescItem={loadNoOfItemsDec}></Item>
      <hr></hr>
      <div className="Order">
        <div>
          <p>Total</p>
          <span className='total_amt'><span>$</span> {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default PassLen;
