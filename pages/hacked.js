import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/nav'
import ReturnBtn from '../components/return'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Hacked() {
    return (
        <div className='h-screen w-screen relative flex flex-col items-center justify-center bg-black'>
            <p className='text-xl max-w-screen-sm text-green-400 z-10 font-mono p-8 m-8 bg-gray-800 rounded-2xl'>
            {">"} Attention, en rentrant tes infos personnelles sans vérifier que le site sur lequel tu es est fiable, tu peux potentiellement permettre à des personnes malveillantes de prendre en otage ton compte discord. Ne fais plus jamais ça, <br/>d{"'"}accord ?
            </p>
            <span className='max-w-screen-sm p-8 m-8 mt-0 bg-gradient-to-bl from-purple-600 to-blue-700 rounded-2xl text-white text-xl font-mono cursor-pointer' onClick={()=>{window.open('https://discord.gg/5C6qhpA', '_blank')}}>
                Rejoins nous sur Discord pour moins de NITRO :3
            </span>
        </div>
    )
}
