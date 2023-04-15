import { useBlogservice } from '@/lib/clientApiServices/blog'
import { Button, Divider, Input, Textarea } from '@chakra-ui/react'
import { File } from 'buffer'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React,{useRef, useState} from 'react'

const CreateBost = () => {
  const {status,data} = useSession()
  const [image, setImage] = useState<any | undefined>()
  const titleRef = useRef<any>()
  const descriptionRef = useRef<any>()
  const router = useRouter()
  const blogServices = useBlogservice()
  if(status === "unauthenticated"){
      router.push("/api/auth/signin")
  }
async function handleSubmit(){
const blogObj = {
  title: titleRef.current.value,
  description: descriptionRef.current.value,
  userEmail:data?.user?.email,
  username:data?.user?.name,
  imageData:{
  image:image[0],
  fileName: Date.now() + image[0].name
  }
}
const response = await blogServices.createBlog(blogObj)
console.log(response)
}

  return (
    <div className='px-8 sm:px-20 mt-4 flex flex-col'>
      <div className='self-end'>
     <input type="file"  onChange={(e) => setImage(e.target.files)}/>
      <Button onClick={() => handleSubmit()}>Publish</Button>
      </div>
      <div>
      <Input placeholder='Title' ref={titleRef} variant={"unstyled"} _placeholder={{fontSize:{sm:40, base:20}}} py={1} fontSize={{sm:40, base:20}}/>
      <Divider />
      <Textarea placeholder='description' ref={descriptionRef} _placeholder={{fontSize:20}} variant={"unstyled"}/>
      </div>
    </div>
  )
}

export default CreateBost