import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/nav'
import ReturnBtn from '../components/return'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function RandomPicture() {
    let [picture, setPicture] = useState("");
    let [transition, setTransition] = useState("");

    const reloadPicture = () => {
        axios
            .get("https://source.unsplash.com/random")
            .then((r) => r.request)
            .then((r) => {
                setPicture(r.responseURL);
                setTimeout(() => {
                    setTransition("");
                }, 100);
            });
    };

    useEffect(() => {
        reloadPicture();
    }, []);

    return (
        <div className='h-screen w-screen bg-gray-800 flex flex-col items-center justify-center'>
            <Navbar route='/random-picture.js'></Navbar>
            <ReturnBtn></ReturnBtn>
            <div id="picture-container" className='h-3/5 w-4/5 flex'>
                <img src={picture} className={transition+' max-h-full max-w-full block rounded-lg m-auto transition-all duration-200'} alt="" />
            </div>
            <div
            className='bg-[#FF0063] text-white mt-8 font-mono px-4 py-2 rounded-lg shadow-lg transition-all duration-200 cursor-pointer hover:bg-[#e50059] hover:shadow-2xl'
                id="button"
                onClick={() => {
                    setTransition("scale-0");
                    reloadPicture();
                }}
            >
                Nouvelle photo
            </div>
        </div>
    )
}
