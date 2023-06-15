import { ReactNode, createContext, useEffect, useState } from "react";

interface ProductCartProps {
    id: string
    name: string
    imageUrl: string
    price: number
    description?: string
    defaultPriceId: string
}

interface CartContextProps {
    cartItems: ProductCartProps[]
    cartItemsQuantity: number
    cartItemsTotal: number
    addItemToCart: (item: ProductCartProps) => void
    removeItemFromCart: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({children}: CartContextProviderProps){

    const [cartItems, setCartItems] = useState<ProductCartProps[]>([])
    const cartItemsQuantity = cartItems.length;
    const [cartItemsTotal, setCartItemsTotal] = useState<number>(0);
    
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price
        }, 0)
        setCartItemsTotal(total);
    }, [cartItems]);

    function addItemToCart(item: ProductCartProps){
        setCartItems(state => [...state, item]);
    }

    function removeItemFromCart(itemToRemove: string){
        const updatedCart: ProductCartProps[] = cartItems.filter(item => {
            return item.id !== itemToRemove
        });
        setCartItems(updatedCart);
    }

    return (
        <CartContext.Provider value={{cartItems, cartItemsTotal, cartItemsQuantity, addItemToCart, removeItemFromCart}}>
            {children}
        </CartContext.Provider>
    )
}