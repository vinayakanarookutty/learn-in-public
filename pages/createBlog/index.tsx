import { Button, Divider, Input, Textarea } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const CreatePost = () => {
  const {status} = useSession()
  const router = useRouter()
  if(status === "unauthenticated"){
      router.push("/api/auth/signin")
  }
  return (
    <div className='px-8 sm:px-20 mt-4 flex flex-col'>
      <Button alignSelf={"end"}>Publish</Button>
      <div>
      <Input placeholder='Title' variant={"unstyled"} _placeholder={{fontSize:{sm:40, base:20}}} py={1} fontSize={{sm:40, base:20}}/>
      <Divider />
      <Textarea placeholder='description' _placeholder={{fontSize:20}} variant={"unstyled"}/>
      </div>
    </div>
  )
}

export default CreatePost