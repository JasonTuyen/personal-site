import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Jason Tuyen</title>
        <description>The internet about page of Jason Tuyen aka iCookieStalker.</description>
      </Helmet>
      <h1>About</h1>
      <p>Hello World,</p>
      <p>I'm Jason Tuyen and I often go by the alias of iCookieStalker. If you're reading this, thanks for visiting my website!</p>
      <p>
        I am a recent graduate from Sacramento State Univerity. I have a degree in Computer Science, with a focus on Software Engineering, and a Minor in Education (specialization in Tecahing, Diversity, and Engagement).
        My prior work and volunteer experience include tutoring, tech support, and many people-focused tasks. 
        I'm now hoping to find a job as a software Engineer and use my past experiences to build user-centric products.
      </p>
      <p>
        I've always been interested in technology, but growing up in a low income community meant that there weren't many opportunities to explore my interest.
        That's why my biggest values are accessibility and community development. But overall my goals are to build products that can help others. 
      </p>
      <p>
        Outside of tech and coding I enjoy curating <a href="https://open.spotify.com/user/icookiestalker/playlists">music playlists</a>, playing video games, binging tv shows, and <a href="https://korea.jasontuyen.com/">videography/photography</a>.
        I'm also always searching for the best cookie and recently picked up longboard dancing.
      </p>
      <p>
        My favorite accomplishments (so far) include: <a href="https://twitter.com/iCookieStalker/status/1325620776523821056">winning a hackathon's creative mini-event by writing a rap song</a> and <a href="https://www.youtube.com/channel/UCU8LhZGkKsmXddsQjARLmsA/videos">being assistant editor for my University's Pilipino Cultural Night</a>.
      </p>
      <p>
        But accomplishments are better as a team, so if you want to collab let's <a href="mailto:chat@jasontuyen.com">chat@jasontuyen.com</a> or you can also <a href="/contact/">fill out this contact form.</a>
      </p>
      <p><b>Good Luck Have Fun,<br></br>Jason "iCookieStalker" Tuyen</b></p>
    </Layout>
  )
}