import Link from "next/link";
import { Container } from "./styles";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "@/src/context/CartContext";

export interface CatalogItemProps {
    product: {
      id: string
      name: string
      imageUrl: string
      price: number
      defaultPriceId: string
    }
}

export default function CatalogItem({ product }: CatalogItemProps) {

    const { addItemToCart } = useContext(CartContext);

    function handleAddItemToCart() {
        const addNewItemToCart = { ...product }
        addItemToCart(addNewItemToCart)
    }

    return (
        <Container className="keen-slider__slide">
            <Link href={`/product/${product.id}`}>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
            </Link>
            <footer>
                <div>
                    <strong>{product.name}</strong>
                    <p>{`R$ ${product.price.toFixed(2).replace(".",",")}`}</p>
                </div>

                <button onClick={handleAddItemToCart}>
                    <Handbag size={32} weight="bold" />
                </button>
            </footer>
        </Container>
    )
}