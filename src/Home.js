import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {AddToCart, RemoveFromCart, IncreseItem, DecreaseItem} from './Action';
// import {allReducer} from './Reducer';
import {useEffect} from 'react';
import ProductData from './data.json';

function Home() {
  const cart = useSelector(state=>state.cartReducer);
  const dispatch = useDispatch();
  let products = ProductData;


  useEffect(() => {
   console.log(cart);
  }, [cart])

  return (
    <div className='products'>
      {/* <h2>{cart}</h2> */}
      {
        products.map((data)=>{
          return(
            <div key={data.id} className="product_card">
            <img src={data.image}  alt=""/>
            <div className="product_card_text">
            <h3>{data.brand}</h3>
            <h4>{data.title}</h4>
            {cart[data.id] !== undefined?<button>Added to Cart</button>:<button onClick={()=>dispatch(AddToCart(data.id))}>Add To Cart</button>}
            </div>
        </div>
          )
        })
      }
      {/* <button onClick={()=>dispatch(AddToCart(2))}>Add To Cart</button>
      <button onClick={()=>dispatch(AddToCart(3))}>Add To Cart</button>
      <button onClick={()=>dispatch(RemoveFromCart(2))}> Remove from Cart</button>
      <button onClick={()=>dispatch(IncreseItem(2))}>Increase</button>
      <button onClick={()=>dispatch(DecreaseItem(2))}>Decrease</button> */}
    </div>
  );
}

export default Home;
