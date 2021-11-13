import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Socials from "../components/socials"
import "../styles/global.css"
import ThumbnailOne from "../static/Thumbnail-Liquid.jpg"
import ThumbnailTwo from "../static/Thumbnail-FE3H.jpg"
import ThumbnailThree from "../static/Thumbnail-PersonalSite.jpg"

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Tuyen</title>
        <description>The internet homepage of Jason Tuyen aka iCookieStalker.</description>
      </Helmet>
      <div style={{paddingTop:200, paddingBottom:500}}>
        <p style={{fontSize:40}}><span role="img" aria-label="peace sign">✌</span> Hi, I'm Jason!</p>
        <p>Also known as <mark>iCookieStalker.</mark></p>
        <p>I'm a <mark>Computer Science and Education Student</mark> from California.</p>
        <p>Currently looking for an oportunity to work as a <mark>Software Engineer.</mark></p>
        <a href="https://www.jasontuyen.com/projects">Click here to see my in-depth project posts.</a>
        {/*<p><mark>Scroll down</mark> to see some of my favorite projects.</p>*/}
        <div style={{float: "right"}}>
          <Socials />
        </div>
      </div>
      {/* temporary removed for redesign
      <div style={{padding:15}}> 
        <p style={{fontSize:30}}><a href="/posts/randomfe3h/">RandomFE3H</a></p>
        <img
          style={{height: 324, width: 576}}
          src={ThumbnailTwo}
          alt="Screenshot of Python programming code."
        />
        <p>RandomFE3H is a random team run generator for the game: Fire Emblem Three Houses (FE3H). Running this program will return you a team for your next playthough of FE3H. I created this program because I was getting bored of running "optimal" playthroughs of FE3H and to practice Python.</p>
      </div>
      <div style={{border:"solid", padding:15}}> 
        <p style={{fontSize:30}}><a href="/posts/personal-website/">Personal Website</a></p>
        <img
          style={{height: 324, width: 576}}
          src={ThumbnailThree}
          alt="Screenshot of website over purple background."
        />
        <p>This website is the 2nd iteration of my personal website and my 4th website ever created. This website serves as a work portfolio and as my homepage on the interent. This whole site was built using Gatsby.</p>
      </div>
      <div style={{padding:15}}>  
        <p style={{fontSize:30}}><a href="/posts/liquidtracksforliquidhacks/">LiquidTrackForLiquidHacks</a></p>
        <img
          style={{height: 324, width: 576}}
          src={ThumbnailOne}
          alt="Laptop with a web application displayed."
        />
        <p>LiquidTrackForLiquidHacks was a web application that I created during Liquid Hacks (a hackathon hosted by renowned esports organization Team Liquid) to promote mental health. This web application tracks water intake, sends reminders, provides inspirational League of Legends quotes, and plays hourly Animal Crossing music.</p>
      </div>
      */}
    </Layout>
  )
}