import { auth } from "@/firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../redux/actions";

const useProfile = () =>{
    const dispatch = useDispatch();
    const user = auth.currentUser;
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const newImage = e.target.files[0]
        setImage(e.target.files[0]);
        return dispatch(editProfile(newImage));
        };

    return {
        user,
        handleImageChange
    }
}

export default useProfile;