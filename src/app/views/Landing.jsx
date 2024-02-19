"use client"
import { useDispatch, useSelector } from "react-redux"
import LogIn from "../components/Login"
import { useEffect } from "react"
import { loginUser } from "../redux/actions"
import Chat from "./Chat"
import { getAuth } from "firebase/auth"
/* import Register from "../components/Register" */
import Navbar from "../components/Navbar"

const landing = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        const auth = getAuth();
        const currentUser = auth.currentUser;
        console.log("Usuario actualmente", currentUser)
        console.log("Valor del access", state.firebase.access)
    }, [state])
/*     const accesToken = useSelector(state => state.user.accessToken)
    console.log("El token" + accesToken) */
/*     const userFirebase = {
        email: "prueba@hotmail.com",
        password: "Prueba123"
    }
    useEffect(()=>{
        dispatch(loginUser({...userFirebase}))
    },[]) */
    return (
        <div>
            <Navbar/>
            {/*             <Register/> */}
            {/* Si es true <Chat/> si es false <Login/> */}{/* <LogIn/> */}
            {/* Si esta logueado redirigir a <Chat/> */}
            {state.firebase.access ? <Chat/> : <LogIn/>}
        </div>
    )
}

export default landing