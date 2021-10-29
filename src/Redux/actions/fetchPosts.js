import { useSelector } from "react-redux";
import { FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_DENIED,
    SAVE_FETCH_POST_REQUEST,
    SAVE_FETCH_POST_SUCCESS,
    SAVE_FETCH_POST_DENIED,
    GET_POSTS_BY_USER_ID,
    CLEAN_POSTS_BY_USER_ID
    } from "../types";

const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST,
        isLoading: true
    }
}

const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POSTS_SUCCESS,
        isLoading: false,
        payload: posts
    }
}

const fetchPostsDenied = error => {
    return {
        type: FETCH_POSTS_DENIED,
        isLoading: false,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch, getState) => {
        const state = getState();
        if(!state.postsData.posts.length){
            dispatch(fetchPostsRequest())
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then( res => {
                    if (!res.ok) {
                        throw Error("Fetch of posts denied")
                    } else {
                        return res.json()
                    }
                })
                .then( posts => {
                    dispatch(fetchPostsSuccess(posts))
                })
                .catch( err => dispatch(fetchPostsDenied(err.mesage)))
        } else if (!!state.postsData.posts.length){
            return
        }
    }
}

const setPostsByUserId = posts => {
    return {
        type: GET_POSTS_BY_USER_ID,
        payload: posts
    }
}

const cleanPostsByUserId = () => {
    return{
        type: CLEAN_POSTS_BY_USER_ID
    }
}

export const getPostsByUserId = (userId) => {

    return (dispatch, getState) => {
        const state = getState();
        const postsByUserId = state.postsData.posts.filter(post => post.userId === Number(userId));
            if (!state.postsData.postsByUserId.length){
                dispatch(setPostsByUserId(postsByUserId))
            } else {
                dispatch(cleanPostsByUserId());
                dispatch(setPostsByUserId(postsByUserId))
            }
    }
}

const fetchSavePostRequest = () => {
    return {
        type: SAVE_FETCH_POST_REQUEST,
        isLoading: true,
    }
}

const fetchSavePostSuccess = resp => {
    return {
        type: SAVE_FETCH_POST_SUCCESS,
        payload: resp
    }
}

const fetchSavePostDenied = error => {
    return {
        type: SAVE_FETCH_POST_DENIED,
        payload: error
    }
}

export const fetchSavePost = (post) => {
    return (dispatch) => {
        dispatch(fetchSavePostRequest());
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((resp) => {
                dispatch(fetchSavePostSuccess(resp.status))
                return resp.json();
            })
            .then((post) => console.log(post))
            .catch((error) => dispatch(fetchSavePostDenied(error)))
    }
}