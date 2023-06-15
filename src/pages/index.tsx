import 'keen-slider/keen-slider.min.css'

import Head from 'next/head'
import { useKeenSlider } from 'keen-slider/react'
import { Container } from '../styles/pages/Home'
import CatalogItem from '../components/CatalogItem'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export default function Home({products}: HomeProps) {

  console.log(process.env.STRIPE_SECRET_KEY);

  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.4,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Online Payment Shop</title>
      </Head>
      <Container ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return <CatalogItem key={product.id} product={product} />
          })
        }      
      </Container>      
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  
  const products = response.data.map((item) => {
    const price = item.default_price as Stripe.Price;

    return {
      id: item.id,
      name: item.name,
      imageUrl: item.images[0],
      description: item.name,
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    //revalidate: 60 * 60 * 2, // 2 hour
    props: {
      products,
    },
    revalidate: 60 * 60 * 1
  }
}
