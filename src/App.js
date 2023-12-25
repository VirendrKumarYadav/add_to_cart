import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Main from './component/main/main'
function App() {
let [items,setItems] = useState(4);
   let noOfItems=(arg)=>{
    setItems(arg+items);
   }

  return (
    <div className="App">
      <Header setItemNo={items}></Header>
     <Main onLoadItems={noOfItems}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
