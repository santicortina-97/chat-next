import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../redux/actions"


const useNavbar = () =>{
    const isLogged = useSelector(state => state.firebase.access)
    const dispatch = useDispatch();
    
    const handleLogout = () =>{
        dispatch(logoutUser())
    }

    return {
        isLogged,
        handleLogout,
    }
}

export default useNavbar;