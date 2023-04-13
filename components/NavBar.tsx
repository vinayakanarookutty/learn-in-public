"use client"
import { Button, Heading, Highlight } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import {signOut} from "next-auth/react"
interface Props{
    username:string | any
}
const NavBar = ({username}:Props) => {
    return (
        <ChakraProvider>
            <div className='px-10 sm:px-20 mx-auto py-5'>
                <div className='flex justify-between whitespace-nowrap'>
                    <Heading size={"md"}>
                        <Highlight query="Public"
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Learn in Public
                        </Highlight>
                    </Heading>
                    <div className='flex gap-10 items-center'>

                        <ul className='hidden sm:flex gap-5'>
                            <li className='cursor-pointer'>Trending</li>
                            <li className='cursor-pointer'>Courses</li>
                            <li className='cursor-pointer'>Subscriptions</li>
                            <li className='cursor-pointer'>Projects</li>
                            <li className='cursor-pointer'>Blogs</li>
                        </ul>
                        <div className='flex items-center gap-3'>
                            <FaUserAlt />
                            {username}
                            <Button onClick={() => signOut()}>Sign out</Button>
                        </div>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default NavBar