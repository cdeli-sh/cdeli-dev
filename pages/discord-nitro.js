import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/nav'
import ReturnBtn from '../components/return'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function DiscordNitro() {
    let [modal, setModal] = useState(false)
    return (
        <div className='h-screen w-screen relative'>
            <NitroModal state={modal} setState={setModal}/>
            <video src="/vid/5335e8295c3be0c064139d43e01df794.mp4" autoPlay loop className='absolute z-0 top-0 left-0 w-screen h-screen object-center object-cover'></video>
            <div className='h-full flex flex-col p-16 md:items-start items-center justify-center z-10 space-y-6'>
                <Image src={require('../public/img/cb436e22ed18484e04f3e6002e407de9.svg')}></Image>
                <p className='z-20 text-white text-lg leading-tight md:w-1/2'>
                    Profite d{"'"}une expérience améliorée sur Discord pour un coût mensuel intéressant. Fais passer tes émojis au niveau supérieur, profite de téléchargements de fichiers encore plus gros, sors du lot sur tes serveurs favoris, et bien plus encore.
                    {" "}<span className='underline'>Obtiens nitro gratuitement avec le lien ci-dessous.</span>
                </p>
                <div className="cursor-pointer bg-gray-800 text-white px-8 py-4 z-20 rounded-full text-lg flex items-center hover:bg-gray-700 hover:shadow-2xl transition-all duration-200" onClick={()=>setModal(true)}>
                    <span>0,00$US par an</span>
                    <span className="bg-blue-500 rounded-full text-sm px-2 py-1 ml-2">Réduction de 100%</span>
                </div>
                <div className="cursor-pointer bg-gray-800 text-white px-8 py-4 z-20 rounded-full text-lg flex items-center hover:bg-gray-700 hover:shadow-2xl transition-all duration-200">
                    <span>9,99$US par mois</span>
                </div>
            </div>
        </div>
    )
}

const NitroModal = ({state, setState}) => {
    return(
        <div className={'absolute top-0 right-0 h-screen w-screen bg-slate-800/75 flex items-center justify-center transition-all duration-200 ' + (state ? "opacity-100 z-50" : "opacity-0 -z-10")}>
            <div className={'bg-slate-800 rounded-xl shadow-md p-8 text-center flex flex-col items-center space-y-6 transition-all duration-200 ' + (state ? "scale-100" : "scale-0")}>
                <span className='font-semibold text-2xl text-white'>Connectez vous pour afficher<br/>votre code nitro</span>
                <input type="text" placeholder="Nom d'utilisateur" className='p-4 rounded-xl bg-slate-700 text-white' />
                <div className="cursor-pointer bg-blue-700 text-white px-8 py-4 z-20 rounded-full text-lg flex items-center hover:bg-gray-700 hover:shadow-2xl transition-all duration-200" onClick={()=>{
                    setState(false)
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                    window.location.href = "/hacked";
                }}>
                    <span>Valider</span>
                </div>
            </div>
        </div>
    )
}

