import { useState } from 'react'
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions"


const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(loginUser({email, password}))
    }


    return{
        handleLogin,
        setEmail,
        setPassword,
        email,
        password,
    }
}

export default useLogin;