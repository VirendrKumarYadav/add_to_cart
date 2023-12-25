import React, {useState} from 'react'
import './item.css'


function Item( props) {
  const [noOfItem,setNoItems]=useState(1);
//   const [ttlprice,setPrice]=useState(2600.54);
  
  const increseItems=()=>{
    setNoItems(noOfItem+1);
    props.loadIncItem();
    props.loadIncItem(parseFloat(props.price));
  }
  const decreseItems=()=>{
    if(noOfItem>0){   
    setNoItems(noOfItem-1);
    props.loadDescItem(parseFloat(props.price));
    }
  }
 

    return (
        <div className='list-item'>
            <div className='left'>
                <img src={props.src} height={"150px"} width={"150px"}></img>
                <div>
                    <h4>{props.itemName}</h4>
                    <p><span>$</span>{props.price}</p>
                    <button>Remove</button>
                </div>
            </div>
            <div className='right'>
                <button onClick={increseItems}><span class="material-symbols-outlined">
                    arrow_forward_ios
                </span></button>
                <p>{noOfItem}</p>
                <button onClick={decreseItems}><span class="material-symbols-outlined">
                    arrow_back_ios
                </span></button>
            </div>
        </div>
    )
}

export default Item
