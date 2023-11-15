import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Highlight from "../components/highlight"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import ThumbnailOne from "../static/Thumbnail-Validation.gif"
import ThumbnailTwo from "../static/Thumbnail-GFTTT.png"
import ThumbnailThree from "../static/Thumbnail-Spotifestival.jpeg"
import "../styles/global.css"

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Tuyen</title>
        <description>The internet homepage of Jason Tuyen.</description>
      </Helmet>
      <div style={{paddingTop:200, paddingBottom:500}}>
        <p style={{fontSize:22}}><span role="img" aria-label="peace sign">✌</span> Hi, I'm Jason!</p>
        <p style={{fontSize:36}}>I am an <mark>Informatics Graduate Student</mark> with a <mark>Bachelors in Computer Science</mark>, currently looking for <mark>intern & entry-level roles</mark>.</p>
        <p style={{fontSize:22, textDecoration:"underline"}}>Scroll down to see my favorite projects.</p>
        <div style={{float: "right"}}>
          <a href="https://github.com/JasonTuyen" target="_blank" rel="noopener noreferrer"><FaGithubSquare style={{height:"40", width:"40", cursor: 'pointer', margin:"5"}}/></a>
          <a href="https://www.linkedin.com/in/jason-tuyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{height:"40", width:"40", cursor: 'pointer', margin:"5"}}/></a>
        </div>
      </div>
      <Highlight
          title={<a href="/posts/spotifestival/">Spotifestival</a>}
          desc="A Spotify web application to display your top artists as a festival lineup poster."
          github={<a href="https://github.com/JasonTuyen/spotifestival">GitHub</a>}
          link={<a href="https://spotifestival.azurewebsites.net/">Live Demo</a>}
          image={ThumbnailThree}
      />
      <Highlight
          title={<a href="/posts/senior-project/">Goblin Forge Tabletop Tools</a>}
          desc="A tool for Dungeons and Dragons (D&D) players to store, save, and retrieve their custom-made D&D characters."
          github={<a href="https://github.com/JasonTuyen/GFTTT">GitHub</a>}
          link={<a href="/posts/senior-project/">Read More</a>}
          image={ThumbnailTwo}
      />
      <Highlight
          title={<a href="/posts/validation-project/">The Validation Project</a>}
          desc="An online website where people can share their story, some advice, or just kind words to one another."
          github={<a href="https://github.com/JasonTuyen/validation-pridemakers">GitHub</a>}
          link={<a href="/posts/validation-project/">Read More</a>}
          image={ThumbnailOne}
      />
      <div style={{textAlign: 'center'}}>
        <button style={{backgroundColor: 'var(--bg)', border: '1px solid var(--textLink)'}}><a href="/projects">See More Projects</a></button>
      </div>
    </Layout>
  )
}
