import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"

export default function Posts({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>Topic(s): {post.frontmatter.tags}</p>
        <div style={{color: 'var(--textTitle)'}} dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`