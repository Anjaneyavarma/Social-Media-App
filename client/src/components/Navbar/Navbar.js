import React from 'react';
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import profile1 from '../../assets/profile1.png'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function Navbar(){
    return(
        <div className="nav-container">
            <div className="navbar-left">
                <span className="logo">Social Media App </span>
            </div>
            <div className="navbar-center">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search here"
                />
                <SearchIcon className="search-icon"/>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    <span className="navbar-link">Homepage</span>
                    <span className="navbar-link">Timeline</span>
                </div>
                <div className="navbar-icons">
                    <PersonIcon/>
                    <span className="navbar-iconbadge">1</span>
                </div>
                <div className="navbar-icons">
                    <ChatIcon/>
                    <span className="navbar-iconbadge">1</span>
                </div>
                <div className="navbar-icons">
                    <CircleNotificationsIcon/>
                    <span className="navbar-iconbadge">1</span>
                </div>
                <img className="navbar-image" src={profile1} alt=""/>
            </div>
        </div>
    );
}