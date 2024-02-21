import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../redux/actions"
import { useRouter } from 'next/navigation'


const useRegister = () =>{
    const router = useRouter()
    const stateAccess = useSelector(state => state.firebase.access)
    const dispatch= useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    })
    const [errors, setErrors] = useState({})

    const validateRegister = () =>{
        const errors = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(!user.name){
            errors.name= "This field is required"
        }
        if(!regexEmail.test(user.email)){
            errors.email= "This field is required"
        }
        if(!user.password){
            errors.password= "This field is required"
        }else if(!/\d/.test(user.password)){
            errors.password= "Password must contain a number"
        }else if(user.password.length < 6 || user.password.length > 10){
            errors.password= "The password must contain between 6 and 10 characters"
        }

        setErrors(errors)
        return errors
    }

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const validationErrors = validateRegister();
        if(Object.keys(validationErrors).length === 0){
        dispatch(registerUser(user))
        }
    }

    useEffect(() =>{
        if(stateAccess){
            router.push("/")
        }
    }, [stateAccess])

    return{
        setUser,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useRegister;