import { FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_DENIED,
    SAVE_FETCH_POST_REQUEST,
    SAVE_FETCH_POST_SUCCESS,
    SAVE_FETCH_POST_DENIED,
    GET_POSTS_BY_USER_ID,
    CLEAN_POSTS_BY_USER_ID
    } from "../types";


const initialPostsState = {
    isLoading: false,
    posts: [],
    postsByUserId:[],
    error: null,
    POSTStatus: false
}

export const postsReducer = (state = initialPostsState, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                isLoading: true
            } 
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case FETCH_POSTS_DENIED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SAVE_FETCH_POST_REQUEST:
            return{
                ...state,
                isLoading: true,
                POSTStatus: "waiting"
            }
        case SAVE_FETCH_POST_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                POSTStatus:"success"
            }
        case SAVE_FETCH_POST_DENIED:
            return{
                ...state,
                isLoading: false,
                POSTStatus: action.payload
            }
        case GET_POSTS_BY_USER_ID:
            return{
                ...state,
                postsByUserId: action.payload
            }
        case CLEAN_POSTS_BY_USER_ID:
            return{
                ...state,
                postsByUserId: []
            }
        default:
            return state
    }
}