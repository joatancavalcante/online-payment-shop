import Logo from "@/src/assets/logo"
import { useRouter } from "next/router"
import { Container } from "./styles";
import Link from "next/link";
import CartIcon from "@/src/assets/cart-icon";
import * as Dialog from '@radix-ui/react-dialog';
import CartResume from "../CartResume";
import { useContext } from "react";
import { CartContext } from "@/src/context/CartContext";


export default function Header(){

    const {pathname} = useRouter();

    const {cartItemsQuantity} = useContext(CartContext);
    
    const showsCartButton = pathname !== '/success';

    return (
        <Container>
            <Link href="/">                
                <Logo />
            </Link>
            
            {showsCartButton && (
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button>                            
                            <CartIcon />                            
                            {cartItemsQuantity > 0 && <span>{cartItemsQuantity}</span>}
                        </button>
                    </Dialog.Trigger>
                    <CartResume />
                </Dialog.Root>
            )}
        </Container>        
    )
}