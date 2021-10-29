import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({usersData: usersReducer, postsData: postsReducer})

export default rootReducer