import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Button, ChakraProvider } from '@chakra-ui/react'
import { SessionProvider, signOut } from "next-auth/react"
import { Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,} from "@chakra-ui/react"
import NavBar from '@/components/NavBar'
import { useRef } from 'react'
export default function App({ session,Component, pageProps }: AppProps | any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()
  return (<SessionProvider session={session}>
  <ChakraProvider>
<NavBar drawerOpen={onOpen} menuBtnRef={btnRef}/>
    <Component {...pageProps} />
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme='blue' variant={"outline"} onClick={() => signOut()}>Sign Out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </ChakraProvider>
</SessionProvider>
  )
}
