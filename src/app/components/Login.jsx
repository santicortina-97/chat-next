"use client"
import Link from 'next/link'
import { useLogin } from '../hooks'

const login = () => {
    const {handleLogin, setEmail, setPassword, email, password, errors} = useLogin();

    return (
        <div className="w-full max-w-xs m-auto">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#77818F]">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@email.com"/>
                    {errors.email && <p className='text-red-600'>{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="*************"/>
                    {errors.password && <p className='text-red-600'>{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
            <p className="my-4 text-sm flex justify-between px-3 dark:text-white">
                Don't have an account?
                <Link href="/register" className="text-blue-700 hover:text-blue-900 dark:text-blue-300">Register</Link>
            </p>
        </div>
    )
}

export default login

