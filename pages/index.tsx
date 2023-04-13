import NavBar from '@/components/NavBar';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Home() {
  const {data,status, update} = useSession()
  const [hydrated, setHydrated] = useState<boolean>()
  const router = useRouter()
  useEffect(() => {
    setHydrated(true)
  })
  if(!hydrated) return null
  if(status === "unauthenticated") 
  {router.push("api/auth/signin")
}
  return (
   <div>
    <NavBar username={data?.user?.name}/>
   </div>
  )
}
