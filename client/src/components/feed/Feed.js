import React from 'react'
import './feed.css';
import Share from '../Share/Share.js'
import Post from '../Post/Post.js'
import {Posts} from '../../dummyData'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-container">
                <Share/>
                {Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}
