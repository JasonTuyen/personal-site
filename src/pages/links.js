import React from "react"
import Helmet from "react-helmet"
import pfp from "../static/pfp.jpg"
import "../styles/global.css"

export default function Links() {
    return (
        <div className="wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Links - Jason Tuyen</title>
                <description>The internet links page of Jason Tuyen aka iCookieStalker.</description>
            </Helmet>
            <div className="bio">
                <img 
                    src={pfp}
                    alt="Headshot of Jason Tuyen also known as iCookieStalker"
                />
                <div className="bioInfo">
                    <p style={{fontSize:16}}><b>Jason Tuyen</b><br></br>@iCookieStalker</p>
                    <p style={{fontSize:18}}>I push buttons for a living <span role="img" aria-label="coding man">👨🏻‍💻</span></p>
                </div>
            </div>
            <div className="labels">
                <a href="https://korea.jasontuyen.com/" target="_blank" rel="noopener noreferrer"><i class="bi bi-stars"/> NEW: Study Abroad Photos <i class="bi bi-stars"/></a>
                <a href="https://www.jasontuyen.com/" target="_blank" rel="noopener noreferrer"><i class="bi bi-globe2"/> Personal Website</a>
                <a href="https://open.spotify.com/user/icookiestalker/playlists" target="_blank" rel="noopener noreferrer"><i class="bi bi-spotify"/> Spotify Playlists</a>
                <a href="https://www.linkedin.com/in/jason-tuyen/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"/> Connect on LinkedIn</a>
                <a href="https://github.com/JasonTuyen" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"/> GitHub</a>
                <a href="https://twitter.com/iCookieStalker" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"/> Twitter</a>
                <a href="https://www.instagram.com/icookiestalker/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"/> Instagram</a>
                <a href="https://www.dashlane.com/cs/zPmC9cJx-Jh7" target="_blank" rel="noopener noreferrer"><i class="bi bi-stars"/>Dashlane Password Manager Referral Link<i class="bi bi-stars"/></a>
                <a href="https://ynab.com/referral/?ref=2ep_estmrjhjk6c-&utm_source=customer_referral" target="_blank" rel="noopener noreferrer"><i class="bi bi-stars"/>YouNeedABudget Budgeting App Referral Link<i class="bi bi-stars"/></a>
            </div>
            <hr/>
            <p style={{textAlign: "center"}}>Interested in working together? Let's <a href="mailto:chat@jasontuyen.com">chat@jasontuyen.com</a></p>
        </div>
    )
  }