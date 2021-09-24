import React, { useLayoutEffect } from 'react';
import CreateNewUser from './User';


export default function CreateUsersList ({users}) {
    return (
        <div className="all-users-container">
            {users.map(user => {
                return <CreateNewUser user={user} key={user.id}/>
            })}
        </div>
    )
}