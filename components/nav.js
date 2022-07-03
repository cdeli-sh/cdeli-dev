export default function Navbar({ route }) {
    return (
        <div className='flex justify-center items-center w-full fixed top-0 font-mono text-white p-4'>
            <span className='text-2xl'>
                {"% "}CDELI.DEV {route}
            </span>
        </div>
    )
}