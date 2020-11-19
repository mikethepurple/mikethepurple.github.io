import React from "react"
import Heading from "../components/headings.js"
import Topmenu from "../components/topmenu"
import Styles from "../styles/global.css"
import { Burger, Menu } from "../components"
import { useState } from "react"
import ReactDOM from "react-dom"
import GoogleFontLoader from "react-google-font-loader"


function App() {
  return (
    <div id="root" style={{ fontFamily: "RobotoBoldCondensed" }}>
      <Topmenu />
      <link
        rel="preload"
        as="font"
        href="../fonts/robotocondensed-bold-webfont.woff2"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <div className="mainContent">
        <div  className="heading">
          <Heading
            className="heading"
            headingFirst=" HELLO, MY NAME IS MISHA "
            size="32vh"
            speed="16"
          />
        </div>
        <div className="portfolioTitle heading overlayText">
          <Heading
            headingFirst={"LINKEDIN B" }
            size="32vh"
            speed="24"
          >
          </Heading>
        </div>
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="I'M A PRODUCT STRATEGIST & DESIGNER "
            size="22vh"
            speed="30"
          />
        </div>
        <div
          onClick={() => window.open("/something", "_self")}
          className="heading"
        >
          <Heading
            headingFirst="PORTFOLIO'S HERE "
            size="16.5vh"
            speed="21"
          />
        </div>
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="CURRICULUM VITAE "
            size="13.2vh"
            speed="7"
          />
        </div>
        <div onClick={() => window.open("/blog", "_self")} className="heading">
          <Heading
            headingFirst="LINKEDIN BTW "
            size="11vh"
            speed="10"
          />
        </div>
      </div>
    </div>
  )
}

export default App
