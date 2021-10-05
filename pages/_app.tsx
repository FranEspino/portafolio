import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../src/components/Container';
import React from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container className="isDarkMode">
       <Component {...pageProps}  />
      </Container>
  )
}
export default MyApp
