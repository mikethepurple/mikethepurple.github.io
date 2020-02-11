import React from "react"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
import { Burger, Menu } from "."
// import styles from "../styles/headings.module.css"
// import burger from "../images/burger.svg"
// import Burger from "../components"
// import { rhythm } from "../utils/typography"
// import Container from "./container"
import { useState } from "react"
import { Component, useRef, useEffect } from "react"
import { render } from "react-dom"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { StyledMenu } from "./sidemenu.styled"

function App({ title, tags }) {
  const [hideOnScroll, setHideOnScroll] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -(0.95 * window.innerHeight)
      console.log(currPos.y)
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )
  return (
    <StyledMenu className="sideMenu" show={hideOnScroll}>
      <div className="sideBack">
        <div className="sideBackText">
          <a href="/portfolio">Back to portfolio</a>
        </div>
      </div>
      <div className="sideContent">
        <p className="sideTitle">{title}</p>
        <span className="sideTags">{tags}</span>
      </div>
    </StyledMenu>
  )
}

export default App
