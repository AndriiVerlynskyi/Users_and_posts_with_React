import React from 'react';

const PostCard = function PostCard ({post}) {
    return(
        <div className="post-card col col-xl-6 col-xxl-6">
            <img className="card-img-top" src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' alt=""/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default PostCard