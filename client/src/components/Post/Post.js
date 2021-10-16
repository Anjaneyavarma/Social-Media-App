import React from 'react';
import './Post.css';
import PublicIcon from '@mui/icons-material/Public';
import profile1 from '../../assets/profile1.jpeg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export default function Post() {
    return (
        <div className="post">
            <div className="post-container">
                <div className="post-top">
                    <div className="post-details">
                        <img className="profile-img" src={profile1} alt=""/>
                        <div className="post-name">
                            <h1 className="name">Jughead</h1>
                            <div className="post-time">
                                <p className="time">23h</p>
                                <PublicIcon fontSize="small" className="public-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="posttop-right">
                        <MoreHorizIcon className="hor-icon" fontSize="large"/>
                    </div>
                </div>
                <div className="post-middle">
                    <p className="psot-description">description</p>
                    <img className="post-img" src={profile1} alt="image"/>
                </div>
                <div className="post-bottom">
                    <div className="post-bot">
                        <div className="post-like">
                            <FavoriteIcon htmlColor="red"/>
                            <p>2 likes</p>
                        </div>
                        <div className="post-comments">
                            <p>9 comments</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="bot-icons">
                        <div className="icons">
                            <FavoriteBorderIcon/>
                            <p>Like</p>
                        </div>
                        <div className="icons">
                            <ChatBubbleOutlineIcon/>
                            <p>Comment</p>
                        </div>
                        <div className="icons">
                            <ShareIcon/>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
