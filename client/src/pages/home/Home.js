import React from 'react';
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/Navbar/Navbar';
import RightBar from '../../components/rightbar/RightBar';
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'


export default function Home(){
    return(
        <div>
            <Navbar/>
            <div className="home-container">
                <Sidebar/>
                <Feed/>
                <RightBar/>
            </div>
        </div>
    );
}