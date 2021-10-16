import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import BookIcon from '@mui/icons-material/Book';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import WorkIcon from '@mui/icons-material/Work';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-container">
                <ul className="sidebarlists">
                    <li className="sidebar-list">
                        <GroupIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Friends</span>
                    </li>
                    <li className="sidebar-list">
                        <RssFeedIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Feed</span>
                    </li>
                    <li className="sidebar-list">
                        <ChatIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Chats</span>
                    </li>
                    <li className="sidebar-list">
                        <VideocamIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Watch</span>
                    </li>
                    <li className="sidebar-list">
                        <GroupsIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Groups</span>
                    </li>
                    <li className="sidebar-list">
                        <BookIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Bookmarks</span>
                    </li>
                    <li className="sidebar-list">
                        <EventSeatIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Events</span>
                    </li>
                    <li className="sidebar-list">
                        <WorkIcon fontSize="large" className="sidebar-icon"/>
                        <span className="sidebar-text">Jobs</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
