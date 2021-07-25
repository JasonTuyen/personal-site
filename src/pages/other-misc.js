import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default function OtherMisc() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Other - Jason Tuyen</title>
        <description>The internet miscellaneous page of Jason Tuyen aka iCookieStalker.</description>
      </Helmet>
      <h1>Other</h1>
      <h3>My Favorite Tools</h3>
      <ul>
        <li>Discord</li>
        <li>Spotify Premium</li>
        <li>Visual Studio Code</li>
        <li>Notion Note Taking App</li>
        <li>Adobe Creative Cloud Software</li>
        <li>Dashlane Password Manager (<a href="https://www.dashlane.com/cs/zPmC9cJx-Jh7">Referral link where we both get 6 months free</a>)</li>
        <li>YouNeedABudget Budgeting App (<a href="https://ynab.com/referral/?ref=2ep_estmrjhjk6c-&utm_source=customer_referral">Referral link where we both get a free month</a>)</li>
        <li>2017 Macbook Pro</li>
        <li>2018 Custom-Built PC (Ryzen 5 2600X/GeForce GTX 1060)</li>
        <li>60% Custom Keyboard (Halo True Switches + Team Liquid Keycaps)</li>
      </ul>
      <h3>My Go-To Spotify Playlists</h3>
      <iframe title="Spotify Playlist" src="https://open.spotify.com/embed/playlist/6eHPRBzxE3OwVeDgXWdLAs" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe title="Spotify Playlist" src="https://open.spotify.com/embed/playlist/5jzl3LDTRrCDuta8dWjyrn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <h3>Credits</h3>
      <p>Website theme from <a href="http://kyleamathews.github.io/typography.js/">Typography.js</a></p>
      <p>Social icons on my homepage are made by <a href="https://www.flaticon.com/authors/freepik">Freepik.</a></p>
      <p>All other content on this website belongs to Jason Tuyen unless otherwise stated.</p>
    </Layout>
  )
}