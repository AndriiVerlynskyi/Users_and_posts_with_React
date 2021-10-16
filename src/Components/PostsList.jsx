import React from 'react';
import PostCard from './PostCard';

const PostsList = function PostList ({posts}) {
    return(
        <div className="all-posts-container">
            {posts.map(post =>{
                return <PostCard post={post} key={post.id}/>
            })}
        </div>
    )
}

export default PostsList