import { Container, ImageContainer, ProductDetails } from "@/src/styles/pages/Product";
import Head from "next/head";
import Image from "next/image";
import shirtImage from '../../assets/shirt.png'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/src/lib/stripe";
import Stripe from "stripe";

export interface ProductProps {
    product: {
      id: string
      name: string
      description: string
      imageUrl: string
      price: number
      defaultPriceId: string
    }
}

export default function Product({product}: ProductProps) {
    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>

            <Container>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{`R$ ${product.price}`}</span>
                    <p>{product.description}</p>
                    <button>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </Container>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [{ params: { id: 'prod_O5FRnw51fTMi62' } }],
      fallback: true,
    }
  }

export const getStaticProps: GetStaticProps = async ({params}) => {

    const productId = String(params.id)

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    })
  
    const price = product.default_price as Stripe.Price
  
    return {
      props: {
        product: {
          id: product.id,
          imageUrl: product.images[0],
          name: product.name,
          description: product.description,
          price: (price.unit_amount / 100).toFixed(2),
          defaultPriceId: price.id,
        },
      },
      revalidate: 60 * 60 * 1, // 1 hour
    }
}