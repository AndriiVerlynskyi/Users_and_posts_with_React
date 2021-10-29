import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_DENIED } from "../types";

const initialUsersState = {
    isLoading: false,
    users: [],
    error: null
}

export const usersReducer = (state = initialUsersState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: action.isLoading,
                users: action.payload
            }
        case FETCH_USERS_DENIED:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.payload
            }
        default:
            return state
    }
}