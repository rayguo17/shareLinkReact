import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import linksReducer from "./info/reducers";



export const store = createStore(
    combineReducers({
        authStore:authReducer,
        linksStore:linksReducer
    }),
    applyMiddleware(thunk)
)