"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../redux/actions"


const Register = () => {
    console.log("Registros")
    const dispatch= useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    })

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
/*         console.log(user) */
        dispatch(registerUser(user))
    }

    return (
        <div className="w-full max-w-xs m-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input type="text" typeof="name" name="name" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="youremail@company.tld"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type="text" typeof="password" name="password" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="*************"/>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                    </button>
                </div>
            </form>
        </div>
/*         <div>
            <form onSubmit={handleSubmit}>
                <input type="text" typeof="email" name="email" onChange={handleChange}/>
                <label htmlFor="email" >Email</label>
                <input type="text" typeof="password" name="password" onChange={handleChange}/>
                <label htmlFor="password" >Password</label>
                <input type="text" typeof="name" name="name" onChange={handleChange}/>
                <label htmlFor="name" >Name</label>
                <button>Register</button>
            </form>
        </div> */
    )
}

export default Register;