import { useProfile } from "../hooks";


const Profile = () => {
    const {user, handleImageChange} = useProfile();
    return (
        <div className="md:w-80 md:h-72 md:ml-7 my-2 bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl">
            <label htmlFor="fileInput">
                <img src={user.photoURL} alt="" className="w-36 h-36 object-cover bg-gray-400 rounded-full border-4 border-slate-50 z-10 cursor-pointer"/>
                <input id="fileInput" type="file" onChange={handleImageChange} style={{ display: "none" }} />
            </label>
            <h2>{user.displayName}</h2>
        </div>
    )
}

export default Profile;