import React from "react"
import { Link, graphql } from "gatsby"

// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import PortfolioBlock from "../components/portfolioblock"
import Topmenu from "../components/topmenu"
import { useState } from "react"
import Heading from "../components/headings"

var type = "EVERYTHING"

export default ({ data }) => {
  console.log(data)
  const [type, setType] = useState("LOL")
  return (
    <div>
      <Topmenu />
      <div className="scrollRibbon heading">
        <Heading headingFirst="SCROLL " size="3vh" speed="30" />
      </div>
      <div className="scrollCheat"></div>
      <div className="portfolioLinks">
        <a onClick={() => setType("EVERYTHING")} href="#copy">
          <span aria-label="EVERYTHING"></span>
          EVERYTHING
        </a>
        <a onClick={() => setType("UX")} href="#copy">
          <span role="img" aria-label="UX"></span>
          UX
        </a>
        <a onClick={() => setType("PRODUCT")} href="#copy">
          <span role="img" aria-label="PRODUCT"></span>
          PRODUCT
        </a>
        <a onClick={() => setType("RESEARCH")} href="#copy">
          <span role="img" aria-label="RESEARCH"></span>
          RESEARCH
        </a>
        <a onClick={() => setType("FACILITATION")} href="#copy">
          <span role="img" aria-label="FACILITATION"></span>
          FACILITATION
        </a>
        <a onClick={() => setType("MANAGEMENT")} href="#copy">
          <span role="img" aria-label="MANAGEMENT"></span>
          MANAGEMENT
        </a>
        <a onClick={() => setType("NOTHING")} id="copy">
          <span role="img" aria-label="NOTHING"></span>
          NOTHING
        </a>

        <div id="anchor" className="anchor" />
      </div>
      <div className="portfolioGrid" id="grid">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.tag.includes(type)) {
            return (
              <PortfolioBlock
                key={node.id}
                link={node.fields.slug}
                headingText={node.frontmatter.title}
                mainText={node.frontmatter.summary}
              />
            )
          }
        })}
        <div className="scrollCheat"></div>
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
            tag
            summary
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
