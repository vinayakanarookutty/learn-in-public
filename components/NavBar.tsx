"use client"
import { Avatar, Button, Heading, Highlight } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import {TbBeta} from "react-icons/tb"
import { useSession } from 'next-auth/react';
import Link from 'next/link'
interface Props{
  
    drawerOpen:()=>void
    menuBtnRef?:any
}
const NavBar = ({drawerOpen, menuBtnRef}:Props) => {
    const { status, data } = useSession()
    return (
        <ChakraProvider>
            <div className='px-10 sm:px-20 mx-auto py-5 relative'>
                <div className='absolute left-3 sm:left-8 top-[40%] font-bold cursor-pointer' onClick={drawerOpen} ref={menuBtnRef}>
            <AiOutlineMenu />
                </div>
                <div className='flex justify-between whitespace-nowrap items-center'>
                    <div className='flex items-center gap-2'>
                    <Heading size={"md"}>
                        <Highlight query="Loop"
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Learn Loop
                        </Highlight>
                    </Heading>   

                        <TbBeta size={23}/>
                    
                    </div>
                    <div className='flex gap-10 items-center'>

                        <ul className='hidden sm:flex gap-5'>
                            <li className='cursor-pointer'>Trending</li>
                            <li className='cursor-pointer'>Courses</li>
                            <li className='cursor-pointer'>Subscriptions</li>
                            <li className='cursor-pointer'>Projects</li>
                            <li className='cursor-pointer'>Blogs</li>
                        </ul>
                        <div className='flex items-center gap-3'>
                            {
                                status === "unauthenticated" ? <Link href={"api/auth/signin"}><Button size={"sm"} variant={"outline"}>Sign In</Button></Link> : <Avatar size={"sm"} name={data?.user?.name!} src={data?.user?.image!}></Avatar>
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default NavBar