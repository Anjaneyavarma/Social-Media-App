import React from 'react'
import './feed.css';
import Share from '../Share/Share.js'
import Post from '../Post/Post.js'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-container">
                <Share/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
