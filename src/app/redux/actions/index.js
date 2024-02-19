import { auth, db } from "../../../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, orderBy, onSnapshot, query, addDoc, serverTimestamp } from "firebase/firestore";

export const REGISTER_USER= "REGISTER_USER"
export const LOGIN_USER= "LOGIN_USER"
export const LOGOUT_USER= "LOGOUT_USER"
export const SEND_MESSAGE= "SEND_MESSAGE"
export const FETCH_MESSAGES= "FETCH_MESSAGES"

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
        alert("Error al registrarse", error)
    }
}

export const loginUser= ({email, password}) => async (dispatch) =>{
    try {
        const signFirebase = await signInWithEmailAndPassword(auth, email, password)
        dispatch({
            type: LOGIN_USER,
            payload: signFirebase
        })
    } catch (error) {
        alert("error al iniciar sesión", error.message)
    }
}

export const logoutUser= () => async (dispatch) =>{
    try {
        dispatch({
            type: LOGOUT_USER,
        })
    } catch (error) {
        alert("error al cerrar sesión", error.message)
    }
}

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
        alert("error al enviar mensaje", error.message)
    }
}


export const fetchMessage = () => async (dispatch) => {
    try {
        // Crear una consulta que ordena los documentos por el campo "timestamp"
        const orderMessages = query(collection(db, "messages"), orderBy("timestamp"));

        // Obtener los documentos de la colección ordenados por timestamp
        onSnapshot(orderMessages, (snapshot) =>{
            const messages = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            // Despachar la acción con los mensajes obtenidos
            dispatch({
                type: FETCH_MESSAGES,
                payload: messages,
            });
        })

    } catch (error) {
        alert("Error al obtener mensajes:", error);
    }
};

