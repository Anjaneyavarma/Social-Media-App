import React, { useState } from 'react'
import './login.css'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <h1 className="heading">Social Media App</h1>
            <div className="text-container">
                <input className="input-holder" type="text" placeholder="Username" value={username} />
                <input className="input-holder" type="password" placeholder="Password" value={password} />
            </div>
            <div className="submit">
                <button className="login-btn" type="submit">Login</button>
            </div>
        </div>
    )
}
