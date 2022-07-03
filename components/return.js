import Link from "next/link";

export default function returnBtn(){
    return(
        <div className="fixed top-0 left-0 cursor-pointer">
            <Link href='/'>
                <svg className="w-6 h-6 m-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </Link>
        </div>
    )
}