import React from "react"
import github from "../static/github.png"
import linkedin from "../static/linkedin.png"
import twitter from "../static/twitter.png"
import instagram from "../static/instagram.png"

export default function Socials() {
    return(
        <div style={{paddingTop: 250}}>
            <a a href="https://github.com/JasonTuyen" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon" height="40px" width="55px" style={{paddingRight:15}}/></a>
            <a a href="https://www.linkedin.com/in/jason-tuyen/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon" height="40px" width="55px" style={{paddingRight:15}}/></a>
            <a a href="https://twitter.com/iCookieStalker" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter icon" height="40px" width="55px" style={{paddingRight:15}}/></a>
            <a a href="https://www.instagram.com/icookiestalker/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon" height="40px" width="40px"/></a>
        </div>
    )
}