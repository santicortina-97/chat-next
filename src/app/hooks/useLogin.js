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
        }else if(!/\d/.test(password)){
            errors.password= "Password must contain a number"
        }else if(password.length < 6 || password.length > 10){
            errors.password= "The password must contain between 6 and 10 characters"
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