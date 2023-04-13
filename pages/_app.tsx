import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"

export default function App({ session,Component, pageProps }: AppProps | any) {
  return (<SessionProvider session={session}>
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
</SessionProvider>
  )
}
