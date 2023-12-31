import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className='bg-white'>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
