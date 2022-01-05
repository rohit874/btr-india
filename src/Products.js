import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AddToBasket} from './Action';

function Products() {
    const products = [
        {id:1,name:"Bread",price:1.10},
        {id:2,name:"Milk",price:0.50},
        {id:3,name:"Cheese",price:0.90},
        {id:4,name:"Soup",price:0.60},
        {id:5,name:"Butter",price:1.20}
    ];

    const basket = useSelector(state=>state.basketReducer);
    const dispatch = useDispatch();

    return (
        <div className='products'>
            <h3>Products</h3>
            {
                products.map((data)=>{
                    return(
                        <div key={data.id}>
                            <h5>{data.name}</h5>
                            <div>
                                <p> &#8364; {data.price}</p>
                                {
                                    basket[data.id]===undefined?<button onClick={()=>dispatch(AddToBasket(data.id))} className='button_enable'>Add</button>
                                    :<button className='button_disable'>Add</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
      </div>
    )
}

export default Products
