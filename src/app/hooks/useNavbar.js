import { useSelector } from "react-redux"


const useNavbar = () =>{
    const isLogged = useSelector(state => state.firebase.access)

    return {
        isLogged,
    }
}

export default useNavbar;