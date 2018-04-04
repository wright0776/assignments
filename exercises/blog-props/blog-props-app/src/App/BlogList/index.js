import React from 'react';
import blogPosts from "../blogPosts.json";
import BlogPost from "./BlogPost";

function BlogList() {

    const posts = blogPosts.posts.map(post => <BlogPost posts = {post} />)

    return (
        <div className="postList">
            {posts}
            <div className="olderPostsContainer">
                <a href="">
                    <div className="olderPosts">
                            <h5>OLDER POSTS &#8594;</h5>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BlogList;