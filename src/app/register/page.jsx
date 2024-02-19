"use client"
import { useEffect } from 'react'
import Register from '../components/Register'
import Chat from '../views/Chat'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const state = useSelector(state => state)

    useEffect(() =>{
        if(state.firebase.access){
            router.push("/")
        }
    }, [state.firebase.access])

    return (
        <div>
            <Register/>
            {/* {state.firebase.access ? <Chat/> : <Register/>}
            <button onClick={() => router.push('/')}>Ir a Landing</button> */}
        </div>
    )
}

export default page;