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
    function incrementCart(id) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems,{id:id, quantity: 1}];
            } else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity+1};
                    }
                    return item;
                });
            }
        });
    }
    function decrementCart(id) {
        setCartItems(currentCartItems => {
            if(currentCartItems.find(item => item.id === id).quantity > 1) {
                currentCartItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    }
                    return item;
                });
            } else {
                currentCartItems.filter(item => item.id !== id);
            }
        });
    }
    function removeFromCart(id) {
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider 
            value={{
                cartItems,
                getItemQuantity,
                incrementCart,
                decrementCart,
                removeFromCart,
                }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}