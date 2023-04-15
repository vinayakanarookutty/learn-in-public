import NavBar from '@/components/NavBar';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import {
  useDisclosure,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { BlogServices } from '@/lib/clientApiServices/blog';
import Waring from '@/components/Waring';
import Blog from '@/components/Blog';

export default function Home(props: any) {
  console.log(props.data)
  const { status} = useSession()
  const [hydrated, setHydrated] = useState<boolean>()
  const [warningModalOpen, setWarningModalOpen] = useState<boolean>(true)
  const router = useRouter()
  useEffect(() => {
    setHydrated(true)
  },[])
  if (!hydrated) return null
  return (
    <div>
      <div className='px-8 sm:px-20'>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Trending</Tab>
            <Tab>Blogs</Tab>
            <Tab>Courses</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
           <h1>Currently unavailable</h1>
            </TabPanel>
            <TabPanel>
             <Blog />
            </TabPanel>
            <TabPanel>
              <p>Currently unavailable</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Waring open={warningModalOpen} setOpen={setWarningModalOpen} message={"Testing warning"} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // const blogService = new BlogServices()
  // const response = await blogService.getBlogList({})
  return {
    props: {
      data: "Hello"
    }
  }
}
