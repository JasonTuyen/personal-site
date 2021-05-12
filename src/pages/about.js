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
        I am currently studying Computer Science and Education (specialization in Equity and Engagement) in California.
        My overall goal is to pursue a career in Software Engineering and to build products that will help others. 
        My biggest values are accessibility and simplicity which is why I enjoyed my previous jobs
        as a Special Education Tutor and IT Tech Support.
      </p>
      <p>
        Outside of technolgy and coding I enjoy <a href="https://www.youtube.com/channel/UCUzAAvRtuSh6q2MI3jy52Dw">playing video games</a>, rocking out on my drums, and binging anime + k-dramas.
        My other interests include videography/photography, <a href="https://open.spotify.com/user/icookiestalker/playlists">making music playlists</a>, searching for the best cookie, and most recently longboard dancing.
      </p>
      <p>
        My two recent and favorite accomplishments are when <a href="https://twitter.com/iCookieStalker/status/1325620776523821056">I wrote a rap song during my first hackathon</a> and when I helped <a href="https://www.youtube.com/channel/UCU8LhZGkKsmXddsQjARLmsA/videos">edit for my University's Pilipino Cultural Night.</a> 
        But accomplishments are better as a team so if you want to collab feel free to send me a message from any of the links below.
      </p>
      <p><b>Good Luck Have Fun,<br></br>Jason "iCookieStalker" Tuyen</b></p>
    </Layout>
  )
}