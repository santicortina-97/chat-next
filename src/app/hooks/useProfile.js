import { auth } from "@/firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../redux/actions";
import { logoutUser } from "../redux/actions"

const useProfile = () =>{
    const dispatch = useDispatch();
    const user = auth.currentUser;
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
        setLoading(true);
    
        if (newImage) {
            await dispatch(editProfile(newImage));
        }
    
        setLoading(false);
    };
    

    const handleLogout = () =>{
        dispatch(logoutUser())
    }

    return {
        user,
        handleImageChange,
        handleLogout,
        loading
    }
}

export default useProfile;