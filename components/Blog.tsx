import { useBlogservice } from '@/lib/clientApiServices/blog'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import {AiOutlinePlus} from 'react-icons/ai'

const Blog = () => {
  const blogServices = useBlogservice()
  return (
    <div className='b h-screen'>
     <Link href={"/createBlog"}> <Button colorScheme='teal' size={"sm"} variant={"outline"} rightIcon={<AiOutlinePlus size={20}/>}>Create blog</Button></Link>  
        {/* {JSON.stringify(props.data)} */}
    </div>
  )
}

export default Blog