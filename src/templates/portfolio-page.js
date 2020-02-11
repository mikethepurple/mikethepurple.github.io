import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/topmenu"
import Heading from "../components/headings.js"
import ScrollRibbon from "../components/scrollribbon"
// import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout />
      <div className="portolioWrapper">
        <div className="portfolioContent">
          <img source="../images/2890.jpg" />
          <div className="portfolioTitle heading">
            <Heading
              headingFirst={post.frontmatter.title + "  "}
              size="32vh"
              speed="30"
            >
              {/* {post.frontmatter.title} */}
            </Heading>
          </div>
          <div className="portfolioTitle heading overlayText">
            <Heading
              headingFirst={post.frontmatter.title + "  "}
              size="32vh"
              speed="30"
            >
              {/* {post.frontmatter.title} */}
            </Heading>
          </div>
          <ScrollRibbon id="scroll"></ScrollRibbon>
          <div className="portfolioItem">
            <div
              className="portfolioContent"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="scrollCheat"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        images
      }
    }
  }
`
