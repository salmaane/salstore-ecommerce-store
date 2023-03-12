import { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCartContext() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}) {

    const [cartItems, setCartItems] = useState([]);
    function getItemQuantity(id) {
        return cartItems.find(item => item.id == id)?.quantity || 0;
    }
    function incrementCart(product,count=1) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === product.id) == null) {
                return [...currentItems,{
                    ...product,
                    quantity: count,
                }];
            } else {
                return currentItems.map(item => {
                    if(item.id === product.id) {
                        return {...item, quantity: item.quantity+count};
                    }
                    return item;
                });
            }
        });
    }
    function decrementCart(id) {
        setCartItems(currentCartItems => {
            if(currentCartItems.find(item => item.id === id)?.quantity === 1) {
                return currentCartItems.filter(item => item.id !== id);
            } else {
                return currentCartItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    }
                    return item;
                });
            }
        });
    }
    function removeFromCart(id) {
        setCartItems(cartItems.filter(item => item.id !== id));
    }
    function cartQuantity() {
        return cartItems.reduce((quantity,item) => quantity+item.quantity, 0);
    }
    function cartTotals() {
        return cartItems.reduce((total,item)=> (
            total + item.quantity*item.retailPrice
        ),0)
    }

    return (
        <ShoppingCartContext.Provider 
            value={{
                cartItems,
                getItemQuantity,
                incrementCart,
                decrementCart,
                removeFromCart,
                cartQuantity,
                cartTotals,
                }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}