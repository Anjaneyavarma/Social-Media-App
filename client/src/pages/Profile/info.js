import React from 'react'
import Profile from '../../assets/profile1.png'
import cover from '../../assets/cover.jpeg'
import './info.css'
import Share from '../../components/Share/Share.js'

export default function info() {
    return (
        <div className="info">
            <div className="img-container">
                <img className="cover-img" src={cover}/>
                <img className="profile-image" src={Profile}/>
            </div>
            <div className="information">
                <h1>James Bond</h1>
                <p>Yoo man</p>
            </div>
            <div className="share-box">
                <Share/>
            </div>
        </div>
    )
}
