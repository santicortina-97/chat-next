"use client"
import { auth } from "../../firebase";
import Profile from "../components/Profile";

const Chat = ({formatTimestamp, handleMessageChange, handleMessageSubmit, messageArray, message}) => {
    return (
        <>
            <div className="mt-11 flex flex-col md:flex-row justify-around bg-white overflow-y-hidden h-full">
                <Profile/>
                <div className="w-9/12 max-h-[700px] min-h-[500px] md:min-h-[700px] bg-customBlue rounded-3xl overflow-y-scroll my-2 mb-4 mx-auto flex flex-col gap-5 ">
                    {messageArray.map((item, index) => {
                        const newStyle = item.uid === auth.currentUser.uid ? "flex justify-end" : "flex justify-end flex-row-reverse";
                        const testStyle = item.uid === auth.currentUser.uid ? "bg-customYellow rounded-3xl p-4 m-2.5 rounded-tr-none shadow-sm break-words max-w-[90%]" : "bg-customTeal rounded-3xl p-4 m-2.5 rounded-tl-none shadow-sm break-words max-w-[90%]";
                        return (
                            <div key={index} className={newStyle}>
                                <div className={testStyle}>
                                    <section>
                                        <p className="text-black font-bold text-lg">{item.message}</p>
                                        <p className="text-sm">De: {item.displayName}</p>
                                        <p className="text-gray-500 text-xs">{item.timestamp && formatTimestamp(item.timestamp.seconds)}</p>
                                    </section>
                                </div>
                                    <img src={item.photoURL} alt="" className="w-14 h-14 object-cover bg-gray-400 rounded-full border-4 border-slate-50 z-10"/>
                            </div>
                        );
                    })}
                    <div className="h-8"></div>
                        <hr />
                    <div className="w-9/12 flex flex-row justify-around items-center mt-7 fixed bottom-4 bg-white">
                        <form onSubmit={handleMessageSubmit} className="flex lg:w-10/12 xl:w-full">
                            <input type="text" value={message} onChange={handleMessageChange} className="block w-full rounded-full border border-gray-300 bg-white py-2 px-4 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" placeholder="Escribe tu mensaje..." />
                            <button type="submit" className="ml-2 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;