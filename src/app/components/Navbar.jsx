"use client"

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    

    return (
        <div className="mb-11">
            <nav className=" bg-[#dedeff] border-gray-200 dark:bg-[#526D82] dark:text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <p className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8Zm-42.55 89.78a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32v111.25Z"/>
                    </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Chat Next</span>
                    </p>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" value="" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                    <div
                        className="w-20 h-10 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden after:flex after:items-center after:justify-center before:flex before:items-center before:justify-center after:content-['☀️'] after:absolute after:h-8 after:w-8 after:top-1/2 after:bg-white after:rounded-full after:left-1 after:-translate-y-1/2 after:transition-all after:duration-700 peer-checked:after:opacity-0 peer-checked:after:rotate-90 peer-checked:after:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] before:content-['🌑'] before:absolute before:bg-[#1d1d1d] before:rounded-full before:top-[4px] before:right-1 before:translate-y-full before:w-8 before:h-8 before:opacity-0 before:transition-all before:duration-700 peer-checked:before:opacity-100 peer-checked:before:rotate-180 peer-checked:before:translate-y-0"
                    ></div>
                </label>
                    </div>
                </div>
            </nav>
                <div className="flex justify-end mr-10">
                </div>
        </div>
    )
}

export default Navbar