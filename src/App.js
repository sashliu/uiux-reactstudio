import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state scode here */
  const[cart, setCart] = useState({});
  const[price, setPrice] = useState(0)
  const updateCart =(uid) =>{
    let newCart = cart;
    if(newCart[uid]){
      newCart[uid]+=1;
    }
    else{
      newCart[uid] = 1;
    }
    setCart({...newCart});
  }




  return(
    <>
    <div className="App">
    <div>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        return(
          <CartItem updateCart={updateCart} item={item} index={index} price={price} setPrice={setPrice} />
         // replace with BakeryItem component
        )
      })}

      </div>
      <div>
      <h2>Cart</h2>
      
      {Object.keys(cart).map((key) =>{
        return(
          <>
          <div>
          {bakeryData[key].name + ": " +cart[key] +" "}
          </div>
          </>
        )

      })}
      <h4>Total</h4>
      <div>{price}</div>


      

      </div>
    </div>
    </>
  );
}
function CartItem(props){
  return(
    <div clas="items">
    <img src ={props.item.image}></img>
    <button onClick={()=>{props.updateCart(props.index); props.setPrice(props.price+props.item.price)}}>Add to Cart</button>
    <h4>{props.item.name} </h4>
    <p>{props.item.price}</p>
    <p>{props.item.description}</p>
    </div>
  )
}

export default App;
