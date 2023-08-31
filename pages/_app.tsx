import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  return <>
    <Head>
      <title>Sanvinganza</title>
    </Head>
    <Component {...pageProps} />
  </>
}
