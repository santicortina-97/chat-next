"use client"
import { useRef, useEffect } from 'react';
import { auth } from "../../firebase";
import Profile from "../components/Profile";

const Chat = ({ formatTimestamp, handleMessageChange, handleMessageSubmit, messageArray, message }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messageArray]);

    return (
        <>
            <div className="mt-11 flex flex-col md:flex-row justify-around overflow-y-hidden h-full">
                <Profile />
                <div className="w-9/12 max-h-[700px] min-h-[500px] md:min-h-[700px] bg-customBlue rounded-3xl overflow-y-scroll my-2 mb-4 p-3 mx-auto flex flex-col gap-5 dark:bg-[#4d648d]">
                    {messageArray.map((item, index) => {
                        const newStyle = item.uid === auth.currentUser.uid ? "flex justify-end" : "flex justify-end flex-row-reverse";
                        const testStyle = item.uid === auth.currentUser.uid ? "bg-[#dedeff] rounded-3xl p-4 m-2.5 rounded-tr-none shadow-sm break-words max-w-[90%] dark:bg-[#7c9dd8]" : "bg-[#AAD7D9] rounded-3xl p-4 m-2.5 rounded-tl-none shadow-sm break-words max-w-[90%] dark:bg-[#6290b3]";
                        return (
                            <div key={index} className={newStyle}>
                                <div className={testStyle}>
                                    <section>
                                        <p className="text-black font-bold text-lg">{item.message}</p>
                                        <p className="text-sm">From: {item.displayName}</p>
                                        <p className="text-gray-500 text-xs dark:text-white">{item.timestamp && formatTimestamp(item.timestamp.seconds)}</p>
                                    </section>
                                </div>
                                <img src={item.photoURL ? item.photoURL : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" className="w-14 h-14 object-cover bg-gray-400 rounded-full" />
                            </div>
                        );
                    })}
                    <div ref={messagesEndRef} />
                    <div className="h-8"></div>
                    <div className="w-9/12 flex flex-row justify-around items-center mt-7 fixed bottom-4">
                        <form onSubmit={handleMessageSubmit} className="flex lg:w-10/12 xl:w-full">
                            <input type="text" value={message} onChange={handleMessageChange} className="block w-full rounded-full py-2 px-4 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-[#526D82] dark:placeholder-white dark:text-white" placeholder="Write your message..." />
                            <button type="submit" className="ml-2 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;
