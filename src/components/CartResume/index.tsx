import * as Dialog from '@radix-ui/react-dialog'
import { Close, Container, FooterContainer, ImageContainer, InfoItemContainer, ItemProductList, ProductList, Title, TotalContainer } from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'
import ShirtImage from '../../assets/shirt.png';
import { Fragment, useContext } from 'react';
import { CartContext } from '@/src/context/CartContext';
import axios from 'axios';

export default function CartResume(){

    const { cartItems, cartItemsTotal, cartItemsQuantity, removeItemFromCart } = useContext(CartContext);

    function handleRemoveItemFromCart(id: string){
        removeItemFromCart(id);
    }

    async function handleCheckout(){
        try {
            const checkoutItems = cartItems.map((item) => {
              return {
                price: item.defaultPriceId,
                quantity: 1,
              }
            })
      
            const response = await axios.post('/api/checkout', {
                checkoutItems: checkoutItems,
            })
      
            const { checkoutUrl } = response.data
      
            window.location.href = checkoutUrl
          } catch {
            // Connect to observability tool like a Datadog, Sentry, etc
            alert('Falha na realização do checkout')
          }        
    }

    return (
        <Dialog.Portal>
            <Container>
                <Close>
                    <X size={24} weight='bold' />
                </Close>
                <Title>Sacola de compas</Title>
                <ProductList>
                    {
                        cartItems.map(item => {
                            return (
                                <Fragment key={item.id}>
                                    <ItemProductList>
                                        <ImageContainer>
                                            <Image src={item.imageUrl} width={101} height={93} alt='' />
                                        </ImageContainer>
                                        <InfoItemContainer>
                                            <span>{item.description}</span>
                                            <strong>R$ {item.price.toFixed(2).replace(".",",")}</strong>
                                            <button onClick={() => handleRemoveItemFromCart(item.id)}>Remover</button>
                                        </InfoItemContainer>                        
                                    </ItemProductList>
                                </Fragment>
                            )
                        })
                    }
                </ProductList>
                <FooterContainer>
                    <TotalContainer>
                        <div>
                            <span>Quantidade</span>
                            <span>{cartItemsQuantity} itens</span>
                        </div>
                        <div>
                            <strong>Valor Total</strong>
                            <strong>{`R$ ${cartItemsTotal.toFixed(2).replace(".", ",")}`}</strong>
                        </div>
                        <button onClick={handleCheckout}>
                            <span>Finalizar Compra</span>
                        </button>
                    </TotalContainer>
                </FooterContainer>
            </Container>
        </Dialog.Portal>
    )
}