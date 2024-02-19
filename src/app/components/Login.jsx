"use client"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions"
import Link from 'next/link'

const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(loginUser({email, password}))
    }

    console.log(`Este es el usuario ${loginUser.accessToken}`)

    return (
        <div className="w-full max-w-xs m-auto">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="youremail@company.tld"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="*************"/>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#!">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p className="my-4 text-sm flex justify-between px-3">
            Don't have an account?
            <Link href="/register" className="text-blue-700 hover:text-blue-900">Register</Link>
            </p>
        </div>
/*         <div className='card px-8 py-6 rounded-lg bg-gray-800 w-72 justify-center items-center'>
            <h2 className='text-center font-bold text-3xl text-white'>Login</h2>
            <form onSubmit={handleLogin} className='my-6'>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} className='p-2 my-2 rounded w-[100%] focus:outline-blue-600'/>
                <label htmlFor="email" className='text-white text-xl'>Email</label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)} className='p-2 my-2 rounded w-[100%] focus:outline-blue-600'/>
                <label htmlFor="password" className='text-white text-xl'>Password</label>
                <button type='submit' className='bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]'>Login</button>
            </form>
        </div> */
    )
}

export default login

