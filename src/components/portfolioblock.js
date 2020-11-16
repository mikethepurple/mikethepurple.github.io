import React from "react"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
import { Burger, Menu } from "."

function App({ link, headingText, mainText }) {
  return (
    <div  className="portfolioBlock">
      <div>
        <p className="gridHeading">{headingText}</p>
        <p className="gridText">{mainText}</p>
      </div>
    </div>
  )
}

export default App
