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

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(registerUser(user))
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
    }
}

export default useRegister;