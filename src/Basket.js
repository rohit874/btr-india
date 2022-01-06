import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IncreseItem, DecreaseItem} from './Action';

function Basket() {
    const products = [
        {id:1,name:"Bread",price:1.10},
        {id:2,name:"Milk",price:0.50},
        {id:3,name:"Cheese",price:0.90},
        {id:4,name:"Soup",price:0.60},
        {id:5,name:"Butter",price:1.20}
    ];
    const basket = useSelector(state=>state.basketReducer);
    const dispatch = useDispatch();
    const [basketItems, setBasketItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    useEffect(() => {
        let Basket = products.filter(data=>basket[data.id]!==undefined);
        setBasketItems(Basket);
     }, [basket])

     useEffect(() => {
        let count = 0;
        let countDiscount = 0;
        basketItems.forEach((data,i)=>{
            if (data.name==="Cheese" && basket[data.id]===2) {
                count += data.price*1;
                countDiscount+=parseFloat(data.price);
                if (!basketItems[i].saving) {
                    basketItems[i].saving = data.price;
                    setBasketItems([...basketItems]);
                }
            }
            if (data.name==="Butter") {
                count += data.price* basket[data.id];
                let discount = Number((data.price * basket[data.id])/3).toFixed(2);
                countDiscount+=parseFloat(discount);
                if (!basketItems[i].saving) {
                    basketItems[i].saving = discount;
                    setBasketItems([...basketItems]);
                }
            }
            if (data.name==="Bread" && (basketItems.findIndex(x => x.name == 'Soup'))!=-1) {
                count += data.price* basket[data.id];
                let discount = Number((data.price * basket[data.id])/2).toFixed(2);
                countDiscount+=parseFloat(discount);
                if (!basketItems[i].saving) {
                    basketItems[i].saving = discount;
                    setBasketItems([...basketItems]);
                }
            }
            else{
                count += data.price * basket[data.id];
            }
        })
        setTotal(Number(count).toFixed(2));
        setTotalDiscount(Number(countDiscount).toFixed(2));
    }, [basketItems])


    return (
        <div className='basket'>
            <h3>Basket</h3>
            {
               basketItems.length?basketItems.map((data)=>{
                    return(
                        <div key={data.id}>
                        <div className='basket_item'>
                        <h5>{data.name}</h5>
                        <h5>&#8364; {data.price}</h5>
                        <div>
                            <button onClick={()=>dispatch(DecreaseItem(data.id))}>
                                -
                            </button>
                            <span>{basket[data.id]}</span>
                            <button onClick={()=>dispatch(IncreseItem(data.id))}>
                                +
                            </button>
                        </div>
                        </div>
                        <p>item price &#8364;{data.price}*{basket[data.id]} = &#8364;{Number(data.price * basket[data.id]).toFixed(2)}</p>
                        {data.saving?<p className='saving'>Saving &#8364; {data.saving}</p>:""}
                        <p>item cost &#8364; {data.saving?Number((data.price * basket[data.id])-data.saving).toFixed(2):Number(data.price * basket[data.id]).toFixed(2)}</p>
                    </div>
                    )
                }):<h4 className='no_items'>No Items Found</h4>
            }
            <div className='total_amount'>
                <div><span>Sub Total: </span><span>&#8364; {total}</span></div>
                <div><span>Saving: </span><span>&#8364; {totalDiscount}</span></div>
                <div><span>Total Amount: </span><span>&#8364; {Number(total-totalDiscount).toFixed(2)}</span></div>

            </div>
        </div>
    )
}

export default Basket
