import { useState } from 'react'
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions"


const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    const validateLogin = () =>{
        const errors = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


        if(!regexEmail.test(email)){
            errors.email= "This field is required"
        }
        if(!password){
            errors.password= "This field is required"
        }

        setErrors(errors)
        return errors
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        const validationErrors = validateLogin();
        if(Object.keys(validationErrors).length === 0){
            dispatch(loginUser({email, password}))
        }
    }


    return{
        handleLogin,
        setEmail,
        setPassword,
        email,
        password,
        errors
    }
}

export default useLogin;