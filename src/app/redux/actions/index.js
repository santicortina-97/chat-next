import { auth, firestore, db, storage } from "../../../firebase"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, orderBy, onSnapshot, query, getDocs, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";

export const REGISTER_USER= "REGISTER_USER"
export const LOGIN_USER= "LOGIN_USER"
export const LOGOUT_USER= "LOGOUT_USER"
export const SEND_MESSAGE= "SEND_MESSAGE"
export const FETCH_MESSAGES= "FETCH_MESSAGES"
/* export const UPLOAD_AVATAR= "UPLOAD_AVATAR" */


/* const auth = getAuth(); */

export const registerUser= ({name, email, password}) => async (dispatch) =>{
    try {
        const registerFirebase = await createUserWithEmailAndPassword(auth, email, password)
        const updateUser = registerFirebase.user;

        await updateProfile(updateUser, {
            displayName: name
        })

        dispatch({
            type: REGISTER_USER,
            payload: updateUser,
        })
    } catch (error) {
        console.log("Error al registrarse", error)
    }
}

export const loginUser= ({email, password}) => async (dispatch) =>{
    try {
/*         const email = "prueba@hotmail.com"
        const password = "Prueba123" */
        const signFirebase = await signInWithEmailAndPassword(auth, email, password)
        console.log("SignFirebase in action", signFirebase)
    /*     console.log("aca viene el console.log" + data)
        const test = await auth.getUser() */
    /*     console.log(test) */
        dispatch({
            type: "LOGIN_USER",
            payload: signFirebase
        })
    } catch (error) {
        console.log("error al iniciar sesión", error.message)
    }
}

export const logoutUser= () => async (dispatch) =>{
    try {
        dispatch({
            type: "LOGOUT_USER",
        })
    } catch (error) {
        console.log("error al cerrar sesión", error.message)
    }
}

/* export const sendMessage = (text) => async (dispatch) => {
    try {
        const user = auth.currentUser;
        if(!user){
            throw new Error("Usuario no autenticado. Debes iniciar sesión")
        }
        await addDoc(collection(db, "messages"), {
            message: text,
            timestamp: serverTimestamp(),
            userId: user.uid
        })
        dispatch({
            type:SEND_MESSAGE,
            payload:text
        })
    } catch (error) {
        console.log("error al enviar mensaje", error.message)
    }
} */

export const sendMessage = (text) => async (dispatch) => {
    try {
        const {uid, email, displayName} = auth.currentUser;
        
        await addDoc(collection(db, "messages"), {
            message: text,
            timestamp: serverTimestamp(),
            uid,
            email,
            displayName,
        })
        dispatch({
            type:SEND_MESSAGE,
            payload:text
        })
    } catch (error) {
        console.log("error al enviar mensaje", error.message)
    }
}


export const fetchMessage = () => async (dispatch) => {
    try {
        // Crear una consulta que ordena los documentos por el campo "timestamp"
        const orderMessages = query(collection(db, "messages"), orderBy("timestamp"));

        // Obtener los documentos de la colección ordenados por timestamp
        const unsubscribe = onSnapshot(orderMessages, (snapshot) =>{
            const messages = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            // Despachar la acción con los mensajes obtenidos
            dispatch({
                type: FETCH_MESSAGES,
                payload: messages,
            });
        })

    } catch (error) {
        console.error("Error al obtener mensajes:", error);
    }
};

/* export const uploadAvatar = (file) => async (dispatch) =>{
    try {
        const storage = getStorage();
        const storageRef = ref(storage, "user_images/" + file.name);

        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        const userDocRef = doc(firestore, "users", auth.currentUser.uid)
        await updateDoc(userDocRef, {
            photoURL: downloadURL
        });
        dispatch({
            type: "UPLOAD_AVATAR",
            payload: downloadURL
        })
    } catch (error) {
        console.log("Error al subir avatar", error.message)
    }
} */

