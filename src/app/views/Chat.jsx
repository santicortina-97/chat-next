"use client"
import { auth } from "../../firebase";

const Chat = ({formatTimestamp, handleMessageChange, handleMessageSubmit, messageArray, message}) => {
    return (
        <div className="mt-11 flex justify-around bg-white overflow-y-hidden h-full">
                <div className="w-10/12 max-h-[700px] min-h-[500px] md:min-h-[700px] bg-customBlue rounded-3xl overflow-y-scroll my-2 mb-4 mx-auto flex flex-col gap-5 ">
                    {messageArray.map((item, index) => {
                        const newStyle = item.uid === auth.currentUser.uid ? "flex justify-end" : "flex justify-start";
                        const testStyle = item.uid === auth.currentUser.uid ? "bg-customYellow rounded-3xl p-4 m-2.5 rounded-br-none shadow-sm break-words max-w-[90%]" : "bg-customTeal rounded-3xl p-4 m-2.5 rounded-bl-none shadow-sm break-words max-w-[90%]";
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
    )
}

export default Chat;