import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../Redux/actions/fetchUsers';
import BackBtnBlock from './BackBtnBlock'

const UserDetails = ({userId}) => {
    
    // const usersFromState = useSelector( state => state.usersData.users);

    // const user = usersFromState.find( user => {
    //     return user.id === Number(userId)
    // })
    const dispatch = useDispatch()
    dispatch(fetchUsers)

    const user = useSelector( state => state.usersData.users[userId-1]);

    return (
        <div className="user-profile-container">
            <div className="user-info-container">
                <img className='user-photo' src="http://simpleicon.com/wp-content/uploads/user1.png" alt=""/>
                <h3 className="username">{user.username}</h3>
                <h4 className="name">{user.name}</h4>
                <h4 className="user-description">{user.company.catchPhrase}</h4>
            </div>
            <BackBtnBlock/>
        </div>
    )
}

export default UserDetails