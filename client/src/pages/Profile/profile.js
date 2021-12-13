import React from 'react'
import './profile.css'
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Info from "./info"

export default function profile() {
    return (
        <div className="profile">
            <div className="nav-container">
                <Navbar/>
            </div>
            <div className="Profile-container">
            <div className="home-container">
                <Sidebar/>
                <Info/>
            </div>
            </div>

        </div>
    )
}
