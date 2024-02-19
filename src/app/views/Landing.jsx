"use client"
import LogIn from "../components/Login"
import Chat from "./Chat"
import { useChat } from "../hooks"

const landing = () => {
    const {formatTimestamp, handleMessageChange, handleMessageSubmit, messageArray, message, isStoreAccess} = useChat();  

    return (
        <div>
            {isStoreAccess ? <Chat formatTimestamp={formatTimestamp} handleMessageChange={handleMessageChange} 
            handleMessageSubmit={handleMessageSubmit} messageArray={messageArray} message={message}/> : <LogIn/>}
        </div>
    )
}

export default landing