import React from "react"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
import { Burger, Menu } from "."

function App({ headingText, mainText }) {
  return (
    <div className="portfolioBlock">
      <p className="gridHeading">{headingText}</p>
      <p сlassName="gridText"> {mainText}</p>
    </div>
  )
}

export default App
