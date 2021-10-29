import React from 'react';
import { useParams } from 'react-router';
import AddNewPostBlock from '../Components/AddNewPostBlock';
import PostsList from '../Components/PostsList'
import UserDetails from '../Components/UserDetails.jsx';

const UserProfilePage = function PostsPage () {
    const {userId} = useParams(); 
    console.log(userId)
    
    return (
        <div className="user-profile-container">
            <UserDetails userId={userId}/>
            <AddNewPostBlock/>
            <PostsList userId={userId}/>
        </div>
    )
}

export default UserProfilePage