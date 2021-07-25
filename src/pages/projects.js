import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import "../styles/global.css"

export default function Projects({ data }) {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects - Jason Tuyen</title>
        <description>The internet project and blog page of Jason Tuyen aka iCookieStalker.</description>
      </Helmet>
      <div>
        <h1>Projects</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span> — {node.frontmatter.date}</span>
              <br></br>
              Topic(s): {node.frontmatter.tags}
            </h3>
            </Link>
            
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`