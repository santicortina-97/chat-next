"use client"
import Register from '../components/Register'
import { useRegister } from '../hooks'

const page = () => {
    const { handleChange, handleSubmit} = useRegister();

    return (
        <div>
            <Register handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default page;