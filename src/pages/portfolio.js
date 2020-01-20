import React from "react"
import * as headings from "../components/headings.js"
import Topmenu from "../components/topmenu"
// import { Burger, Menu } from "../components"
// import { useState } from "react"

function App() {
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
    </div>
  )
}

export default App
