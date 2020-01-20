import React from "react"
import { Link, graphql } from "gatsby"

// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Topmenu from "../components/topmenu"
export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Topmenu />
      <div className="portfolioLinks">
        <a href="">
          <span role="img" aria-label="EVERYTHING"></span>
          EVERYTHING
        </a>
        <a href="/cv">
          <span role="img" aria-label="UX"></span>
          UX
        </a>
        <a href="/portfolio">
          <span role="img" aria-label="PRODUCT"></span>
          PRODUCT
        </a>
        <a href="/">
          <span role="img" aria-label="RESEARCH"></span>
          RESEARCH
        </a>
        <a href="/">
          <span role="img" aria-label="FACILITATION"></span>
          FACILITATION
        </a>
        <a href="/">
          <span role="img" aria-label="MANAGEMENT"></span>
          MANAGEMENT
        </a>
        <a href="/">
          <span role="img" aria-label="NOTHING"></span>
          СOPY
        </a>
      </div>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
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
            date(formatString: "DD MMMM, YYYY")
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
