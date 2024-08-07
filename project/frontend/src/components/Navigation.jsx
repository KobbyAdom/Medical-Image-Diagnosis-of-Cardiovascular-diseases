import { Link } from "react-router-dom";
import knust from '../assets/knust.png'

export default function Navigation() {
    return (
        <>
            <nav className="flex flex-row px-5 py-5 justify-between items-center">
                <img src={knust} className='w-12 h-auto' alt="Logo" />
                <div className="flex flex-row items-center gap-x-5">
                    <Link to={"/"}>
                        <p className='text-white text-sm font-semibold'>Home</p>
                    </Link>
                    <Link to={"/about"}>
                        <p className='text-white text-sm font-semibold'>About</p>
                    </Link>
                </div>
            </nav>
        </>
    )
}
