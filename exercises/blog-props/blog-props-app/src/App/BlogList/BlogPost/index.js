import React from 'react'

function BlogPost (props) {
    console.log(props)
    const { title, subtitle, date, by } = props.posts;

    return (
        <div className="post">
            <a className="postLink" href="">
                <h2 className="postTitle">{title}</h2>
                <h3 className="postSubtitle">{subtitle}</h3>
            </a>
                <i className="postStamp">Posted by <a href="">{by}</a> on {date}</i>
        </div>
    )
}

export default BlogPost;