import React, {useEffect, useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchPosts, getPostsByUserId } from '../Redux/actions/fetchPosts';
import LoadingBlock from './LoadingBlock';
import PostCard from './PostCard';


// const PostsList = ({ postsData, getPostsByUserId, userId}) => {
//     useEffect(() => {
//         getPostsByUserId(userId)
//     },[])

//     return(
//         <div className="all-posts-container">
//             { postsData.isLoading ? (<LoadingBlock/>):
//                 !!postsData.error ? (<h1>{postsData.error}</h1>):
//                 !!postsData.postsByUserId && postsData.postsByUserId.map( post => {
//                     return <PostCard post={post} key={post.id}/>
//                 }) 
//             }
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         postsData: state.postsData
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getPostsByUserId: () => dispatch(getPostsByUserId())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostsList)

const PostsList = ({userId}) => {
        const postsData = useSelector( state => state.postsData);

        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(fetchPosts())
        },[])

        useEffect( () => {
            if (!!postsData.posts.length){
                dispatch(getPostsByUserId(userId))
            }
        }, [postsData.posts])
    
        return(
            <div className="all-posts-container">
                { postsData.isLoading ? (<LoadingBlock/>):
                    !!postsData.error ? (<h1>{postsData.error}</h1>):
                    !!postsData.postsByUserId && postsData.postsByUserId.map( post => {
                        return <PostCard post={post} key={post.id}/>
                    }) 
                }
            </div>
        )
    }
    
    export default PostsList