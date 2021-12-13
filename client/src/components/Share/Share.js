import React from 'react';
import "./Share.css";
import profile1 from '../../assets/profile1.png';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MoodIcon from '@mui/icons-material/Mood';

export default function Share() {
    return (
        <div className="share">
            <div className="share-container">
                <div className="share-top">
                    <img className="top-image" src={profile1} alt=""/>
                    <input 
                        className="top-input"
                        placeholder="Whats on your mind, Jughead"/>
                </div>
                <hr/>
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="option">
                            <VideoCameraBackIcon htmlColor="tomato" fontSize="large" className="share-icon"/>
                            <span className="share-span">Live</span>
                        </div>
                        <div className="option">
                            <AddAPhotoIcon htmlColor="green" fontSize="large" className="share-icon"/>
                            <span className="share-span">Photo/Video</span>
                        </div>
                        <div className="option">
                            <MoodIcon htmlColor="goldenrod" fontSize="large" className="share-icon"/>
                            <span className="share-span">Feeling/Activity</span>
                        </div>
                    </div>
                    <button className="share-button">Share</button>
                </div>
            </div>
        </div>
    )
}
