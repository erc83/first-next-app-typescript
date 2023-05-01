
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Script src='bootstrap.bundle.min.js' />
  </>
}
