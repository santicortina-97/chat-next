import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMessage, sendMessage } from "../redux/actions"
import { auth } from "../../firebase";

const useChat = () =>{
    const dispatch = useDispatch();
    const storeFirebase = useSelector(state => state.firebase);
    const messageArray = storeFirebase?.messages;
    const [message, setMessage] = useState("");
    const isStoreAccess = storeFirebase?.access;

    const handleMessageSubmit = (e) =>{
        e.preventDefault();
        if(message.trim() !== ""){
            dispatch(sendMessage(message))
            setMessage("")
        }
    }

    const handleMessageChange = (e) =>{
        setMessage(e.target.value)
    }

    const formatTimestamp = (timestamp) =>{
        const date = new Date(timestamp * 1000);
        const month = date.toLocaleString("default", {month: "short"});
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        return `${month} ${day} ${hours}:${minutes}`
    }

    let newStyle = "message";
    if(auth.currentUser){
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        newStyle = user === newUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black";
    }

    useEffect(() =>{
        dispatch(fetchMessage())
    }, [])

    return{
        messageArray,
        handleMessageSubmit,
        handleMessageChange,
        formatTimestamp,
        message,
        isStoreAccess,
    }
}

export default useChat;