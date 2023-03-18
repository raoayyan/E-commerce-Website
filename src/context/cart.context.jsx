import { createContext,useState ,useEffect} from "react";


const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find((cartitem)=> cartitem.id === productToAdd.id)
   if(existingCartItem){
    return cartItems.map((cartitem)=> cartitem.id === productToAdd.id ? {...cartitem,quantity:cartitem.quantity+1}:cartitem
    )
   }
    return [...cartItems, {...productToAdd,quantity:1}]
}
const removeCartItem = (cartItems,cartItemToRemove)=>{
    const existingCartItem = cartItems.find((cartitem)=> cartitem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartitem)=> cartitem.id === cartItemToRemove.id ? {...cartitem,quantity:cartitem.quantity-1}:cartitem
    )

}

const clearCartItem = (cartItems,cartItemToclear)=>cartItems.filter(cartItem => cartItem.id !== cartItemToclear.id)




export const CartContext = createContext({
    inCartopen :false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart : ()=>{},
    cartCount:0,
    carttotal:0
})

export const CartProvider = ({children})=>{
    const  [ inCartopen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems] = useState([]);
   const [cartCount,setCartCount] = useState(0);
   const [carttotal,setcarttotal] = useState(0);


   useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
    setCartCount(newCartCount);
   
   }, [cartItems]);  //every time cartItems changes we need to re calculate cartCount

   useEffect(() => {
    const newtotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,0);
    setcarttotal(newtotal);
   
   }, [cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    };
   
    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    };

    const clearItemFromCart = (cartItemToclear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToclear))
    };
   
    const value = {inCartopen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemToCart,clearItemFromCart,carttotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



