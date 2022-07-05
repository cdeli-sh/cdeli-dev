import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/nav'

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gray-800 flex flex-col items-center justify-center'>
      <Navbar name='/home'></Navbar>
      <div className='flex space-x-4'>
        <Link href="/random-picture">
        <div className='h-48 w-48 aspect-square bg-purple-700 hover:bg-purple-800 items-center flex rounded-lg group transition-all duration-200 cursor-pointer'>
          <svg className="w-12 h-12 m-auto transition-all duration-200 group-hover:scale-125" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
        </Link>
        <Link href="/discord-nitro">
        <div className='h-48 w-48 aspect-square bg-purple-700 hover:bg-purple-800 items-center flex rounded-lg group transition-all duration-200 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 m-auto transition-all duration-200 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        </Link>
      </div>
    </div>
  )
}
