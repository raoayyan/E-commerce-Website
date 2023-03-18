import './cardDropDown.style.scss'
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartInItem from '../cart-in-item/cart-in-item';
const CardDropDown = ()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = ()=>{
        navigate('/checkout')
    }
    return (
       <div className='cart-dropdown-container'>
       <div className='cart-items'>
       {
        cartItems.map((item)=>(
            <CartInItem key={item.id} cartItem={item} />
        ))
       }
       </div>
       <Button onClick={goToCheckOut}>CheckOut</Button>
       </div>
    )
}

export default CardDropDown;