import React from 'react';
import BackBtnBlock from './BackBtnBlock'

const UserDetails = function UserDetails ({user}) {
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