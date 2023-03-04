import React from 'react'
import gitLogo from './pnglogos/gitLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='text-light container-fluid' id='foot'>
            <div className='box1'>
                <div className='' id='footBrand'>
                    NewsUpon
                </div>
                <div id='footLogoContainer'>
                    <a href="https://github.com/Akash33253/NewsUpon" rel="noreferrer" target="_blank">
                        <img src={gitLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.instagram.com/akash_33253" rel="noreferrer" target="_blank">
                        <img src={instaLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/akash-gupta-56a40824a" rel="noreferrer" target="_blank">
                        <img src={linkedinLogo} className="footLogo" alt="" />
                    </a>
                </div>
            </div>
            <div className="box2">
                <div className='footContent'>
                    <ul id="footList">
                        <li><Link Link className="nav-link" to="/business">Business</Link></li>
                        <li><Link Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li><Link Link className="nav-link" to="/health">Health</Link></li>
                        <li><Link Link className="nav-link" to="/science">Science</Link></li>
                        <li><Link Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                    <p id="footPara">
                        This is a News WebApp, I made it using react, Html, Css, JavaScript also used Bootstrap and many other references for designing the app. This app is designed such that is provides live News to you but unfortunately the Free News API I have used services only localhost request. So, I am showing the Sample news. <br/>
                        Please Provide Suggestion and Feedback to me for further improvements.
                        <br/>
                        <a rel="noreferrer" href="mailto:akashgtcatopk@gmail.com">Email me</a>
                    </p>
                </div>
                <div className="copyRight">
                    2022  &#169;  NewsUpon
                </div>
            </div>
        </div>
    )
}
