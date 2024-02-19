"use client"
import { useNavbar } from "../hooks"

const Navbar = () => {
    const {isLogged, handleLogout} = useNavbar();

    return (
        <div className="mb-11">
            <nav className=" bg-customBlue border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <p className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8Zm-42.55 89.78a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32v111.25Z"/>
                    </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Chat Next</span>
                    </p>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {isLogged &&
                            <button className="hover:brightness-110 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={handleLogout}>Log out</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar