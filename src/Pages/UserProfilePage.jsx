import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import AddNewPostBlock from '../Components/AddNewPostBlock';
import LoadingBlock from '../Components/LoadingBlock';
import PostsList from '../Components/PostsList'
import UserDetails from '../Components/UserDetails.jsx';

const UserProfilePage = function PostsPage () {
    const {userId} = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [userIsLoading, setUserIsLoading] = useState(true);
    const [postsAreLoading, setPostsAreLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json()
            })
                .then(data => {
                    const userFoundById = findUserById(data);
                    setUser(userFoundById);
                    setUserIsLoading(false)
                })

        const findUserById = (users) => {
            let userToRender = null;
            users.filter( user => {
                if(user.id == userId){
                    userToRender = user
                }
            })
            return userToRender
        }        

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                return res.json()
            })
                .then(data => {
                    const postsFilteredById = filterPostsById(data);
                    setPosts(postsFilteredById);
                    setPostsAreLoading(false)
                })
        

        const filterPostsById = (postsFromServer) => {
            const postsToShow = [];
            postsFromServer.filter(post => {
                if (post.userId == userId) {
                    postsToShow.push(post)
                }
            })
            if (!!postsToShow.length){
                return postsToShow
            }
        }
    }, [])

    return (
        <div>
            <div className="loading-block">
                {userIsLoading && <LoadingBlock/>}
            </div>
            {user && <UserDetails user={user}/>}
            <AddNewPostBlock/>
            <div className="user-profile-container">
                <div className="loading-block">
                    {postsAreLoading && <LoadingBlock/>}
                </div>
                {posts && <PostsList posts={posts}/>}
            </div>
        </div>
    )
}

export default UserProfilePage