const initialState={
    user:{},
    loading: true,
    access: false,
    messages: [],
}

const firebaseReducer= (state= initialState, action)=>{
    switch (action.type) {
        case "REGISTER_USER":
            return{
                ...state,
                user: action.payload,
                loading: false,
                access: true,
            }
        case "LOGIN_USER":
            return{
                ...state,
                user: null,
                loading: false,
                access: true,
            }
        case "LOGOUT_USER":
            return{
                ...state,
                user: action.payload,
                loading: false,
                access: false,
            }
        case "SEND_MESSAGE":
            return{
                ...state,
                messages: [...state.messages, action.payload],
            }
        case "FETCH_MESSAGES":
            return{
                ...state,
                messages: action.payload,
            }
        default:
            return{
                ...state
            }
    }
} 

export default firebaseReducer