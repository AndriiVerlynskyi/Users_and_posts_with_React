import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';

const userList = function CreateUsersList ({users}) {
    return (
        <div className="all-users-container">
            {users.map(user => {
                return <UserCard user={user} key={user.id}/>
            })}
        </div>
    )
}

export default userList