"use client"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMessage, sendMessage } from "../redux/actions"
import { auth } from "../../firebase";
/* import Profile from "../components/Profile"; */

const Chat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state);
    const messageArray = messages.firebase?.messages;
    const [message, setMessage] = useState("")

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
    }, [dispatch])


    return (
        <div className="mt-11 flex justify-around bg-white overflow-y-hidden h-full">
                <div className="w-10/12 max-h-[700px] min-h-[500px] md:min-h-[700px] bg-customBlue rounded-3xl overflow-y-scroll my-2 mb-4 mx-auto flex flex-col gap-5 ">
                    {messageArray.map((item, index) => {
                        const newStyle = item.uid === auth.currentUser.uid ? "flex justify-end" : "flex justify-start";
                        const testStyle = item.uid === auth.currentUser.uid ? "bg-customYellow rounded-3xl p-4 m-2.5 rounded-br-none shadow-sm break-words max-w-[90%]" : "bg-customTeal rounded-3xl p-4 m-2.5 rounded-bl-none shadow-sm break-words max-w-[90%]";
                        console.log("Este es el item", item)
                        return (
                            <div key={index} className={newStyle}>
                                <div className={testStyle}>
                                    <section>
                                        <p className="text-black font-bold ">{item.message}</p>
                                        <p>De: {item.displayName}</p>
                                        <p className="text-gray-500">{item.timestamp && formatTimestamp(item.timestamp.seconds)}</p>
                                    </section>
                                </div>
                            </div>
                        );
                    })}
                    <div className="h-8"></div>
                        <hr />
                    <div className="w-10/12 flex flex-row justify-around items-center mt-7 fixed bottom-0 bg-white">
                        <form onSubmit={handleMessageSubmit} className="flex w-full">
                            <input type="text" value={message} onChange={handleMessageChange} className="block w-full rounded-full border border-gray-300 bg-white py-2 px-4 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" placeholder="Escribe tu mensaje..." />
                            <button type="submit" className="ml-2 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700">Send</button>
                        </form>
                    </div>
                </div>
        </div>
/*         <div>
            <div className="flex justify-around max-h-800">
                <div>
                    <h2>Nombre</h2>
                    <button>Logout</button>
                </div>
                <div className="w-3/5 overflow-auto relative">
                    {messageArray.map((item, index) => {
                        const newStyle = item.uid === auth.currentUser.uid ? "flex justify-end" : "flex justify-start";
                        const testStyle = item.uid === auth.currentUser.uid ? "bg-indigo-300  rounded-3xl p-4 m-2.5 rounded-br-none shadow-sm" : "bg-indigo-300  rounded-3xl p-4 m-2.5 rounded-bl-none shadow-sm";
                        return (
                            <div key={index} className={newStyle}>
                                <div className={testStyle}>
                                    <section>
                                        <h3>{item.message}</h3>
                                        <p>{item.timestamp && formatTimestamp(item.timestamp.seconds)}</p>
                                    </section>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="">
            <form onSubmit={handleMessageSubmit} className="">
                <input type="text" value={message} onChange={handleMessageChange} className=""/>
                <button type="submit" className="">Send</button>
            </form>
            </div>
        </div> */
        //!

        //!
    )
}

export default Chat;