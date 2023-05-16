import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Jason Tuyen</title>
        <description>The internet about page of Jason Tuyen.</description>
      </Helmet>
      <h1>About</h1>
      <p>Hello World,</p>
      <p>
        I'm Jason Tuyen, a Software Engineer and Graduate Student from California. 
        I also hold a B.S. in Computer Science and a Minor in Education.
      </p>
      <p>
        My prior experience include tutoring STEM topics, tech support, and many other people-focused tasks. 
        I'm now hoping to find a role that makes use of my skills and experience so that I can create human-centered products.
      </p>
      <p>
        I've always been interested in technology, but growing up in a low income community meant that there weren't many opportunities to explore my interest. 
        That's why my biggest values are accessibility and community development. 
        But overall my goal is to just build useful tools for people. 
      </p>
      <p>
        When I'm not coding or learning new tech: I enjoy curating music playlists, playing video games, binging tv shows, taking photos, and editing videos.
      </p>
      <p>
        Thank you for visiting my website. If you want to work together, let's <a href="mailto:chat@jasontuyen.com">chat@jasontuyen.com</a> or you can <a href="/contact/">fill out this contact form.</a>
      </p>
      <p><b>Good Luck Have Fun,<br></br>Jason Tuyen</b></p>
    </Layout>
  )
}