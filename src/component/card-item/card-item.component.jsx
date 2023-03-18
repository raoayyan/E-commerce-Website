
import { useContext } from 'react'

import {ReactComponent as ShopingIcon} from '../../assests/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import './card-item.style.scss'
const CardItem = ()=>{
    const {inCartopen, setIsCartOpen,cartCount} = useContext(CartContext);
   
    const toogleInCartopen = ()=> setIsCartOpen(!inCartopen);
   
    return(
    <div className='cart-icon-container' onClick={toogleInCartopen}>
    <ShopingIcon className='shoping-icon' />
    <span className='item-count'>{cartCount}</span>
    </div>
   )
}
export default CardItem;