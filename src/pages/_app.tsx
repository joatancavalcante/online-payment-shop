import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { globalStyles } from '../styles/global'
import { CartContextProvider } from '../context/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Header />
      <Component {...pageProps} />
    </CartContextProvider>
  )  
}
