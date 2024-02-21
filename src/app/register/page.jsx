"use client"
import Register from '../components/Register'
import { useRegister } from '../hooks'

const page = () => {
    const { handleChange, handleSubmit, errors} = useRegister();

    return (
        <div>
            <Register handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/>
        </div>
    )
}

export default page;