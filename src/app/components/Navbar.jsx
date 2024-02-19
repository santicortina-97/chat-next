"use client"
import { useNavbar } from "../hooks"

const Navbar = () => {
    const {isLogged, handleLogout} = useNavbar();

    return (
        <div className="mb-11">
            <nav className=" bg-zinc-200 border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Chat</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {isLogged &&
                            <button className="text-sm  text-blue-600 hover:underline" onClick={handleLogout}>Log out</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar