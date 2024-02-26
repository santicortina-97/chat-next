import { useProfile } from "../hooks";


const Profile = () => {
    const {user, handleImageChange, handleLogout, loading} = useProfile();
    return (
        <div className="md:w-80 md:h-72 md:ml-7 my-2 bg-white flex flex-col items-center justify-center gap-2 text-center rounded-2xl dark:bg-[#4d648d]">
            <label htmlFor="fileInput" className="relative">
                {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full h-full rounded-full">
                            <span className="text-white">Cargando...</span>
                        </div>
                )}
                
                <img src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" className="w-36 h-36 object-cover bg-gray-400 rounded-full cursor-pointer"/>
                <input id="fileInput" type="file" onChange={handleImageChange} style={{ display: "none" }} />
            </label>

            <h2 className=" dark:text-white">{user.displayName}</h2>
            <button onClick={handleLogout} className="hover:brightness-110 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Log out</button>
        </div>
    )
}

export default Profile;