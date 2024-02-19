const { combineReducers } = require("redux");
import firebaseReducer from "./firebaseReducer"

const rootReducer = combineReducers({
    firebase: firebaseReducer
})

export default rootReducer;