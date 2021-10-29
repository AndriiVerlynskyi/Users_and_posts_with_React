import { FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_DENIED
    } from "../types"

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        isLoading:true
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        isLoading:false,
        payload: users
    }
}

const fetchUsersDenied = error => {
    return {
        type: FETCH_USERS_DENIED,
        isLoading:false,
        payload: error
    }
}

export const fetchUsers = () => {
  return (dispatch, getState) => {
      const state = getState();
      if(!state.usersData.users.length){
      dispatch(fetchUsersRequest());
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok){
                throw Error('Fetch request is denied')
            } else {
                return res.json()
            }
        })
        .then(users => {
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err => {
            dispatch(fetchUsersDenied(err.message))
        })
      } else {
            return
      }
  }  
}