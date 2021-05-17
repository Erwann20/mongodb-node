
import applicationReducer from "./application.reducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    applications : applicationReducer,
})

export default rootReducers;