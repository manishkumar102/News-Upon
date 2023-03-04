import { Link } from 'react-router-dom'
import React,{useState,useEffect} from 'react'

export default function Navbar() {
    const [cTime, setTime] = useState('');
    const [cDate, setDate] = useState('');
    useEffect(() => {
      setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toDateString());
      }, 1000);
    });
    return (
        <div id="navigation">
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                <button className="navbar-toggler" id="hamburger"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/" id="navBrand">NewsUpon</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <span id="time">{cTime}<br/>{cDate}</span>
                </div>
            </nav>
        </div>
    )
}









