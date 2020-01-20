import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="hello">
          {/* &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f; */}
        </span>
        hello
      </a>
      <a href="/cv">
        <span role="img" aria-label="curriculum vitae">
          {/* &#x1f4b8; */}
        </span>
        curriculum vitae
      </a>
      <a href="/portfolio">
        <span role="img" aria-label="portfolio">
          {/* &#x1f4e9; */}
        </span>
        portfolio
      </a>
      <a href="/">
        <span role="img" aria-label="blog">
          {/* &#x1f4e9; */}
        </span>
        blog
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
