import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default function NotFound() {
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 Not Found - Jason Tuyen</title>
          <description>The internet 404 page of Jason Tuyen.</description>
        </Helmet>
        <h1 style={{color: 'var(--textNormal)'}}>404 Not Found</h1>
        <p>Uh, well this is awkward... So looks like the page you are looking for doesn't exist. While you're here enjoy this 404 gif and <a href="/">click here to return to the homepage.</a></p>
        <iframe title="404" src="https://giphy.com/embed/UoeaPqYrimha6rdTFV" width="800" height="450" frameBorder="1"></iframe><p><a href="https://giphy.com/gifs/STARFACE-GmbH-looping-404-starface-UoeaPqYrimha6rdTFV">via GIPHY</a></p>
      </Layout>
    )
  }