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
      ></link>
      <div className="mainContent">
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            className="heading"
            headingFirst="HELLO, MY NAME IS MISHA "
            size="32vh"
            speed="30"
          ></Heading>
        </div>
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="I AM A PRODUCT STRATEGIST & DESIGNER FROM MOSCOW, RUSSIA  "
            size="22vh"
            speed="13"
          ></Heading>
        </div>
        <div
          onClick={() => window.open("/portfolio", "_self")}
          className="heading"
        >
          <Heading
            headingFirst="HERE’S SOME THAT PROJECTS I’VE WORKED ON  "
            size="16.5vh"
            speed="20"
          ></Heading>
        </div>
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="TAKE A LOOK AT MY RESUME AS WELL  "
            size="13.2vh"
            speed="7"
          ></Heading>
        </div>
        <div onClick={() => window.open("/blog", "_self")} className="heading">
          <Heading
            headingFirst="DON’T FORGET TO SUBSCRIBE TO MY BLOG AND SOCIAL MEDIA  "
            size="11vh"
            speed="10"
          ></Heading>
        </div>
      </div>
    </div>
  )
}

export default App

// document.addEventListener("DOMContentLoaded", function(event) {
//   ReactDOM.render(<App />, document.getElementById("root"))
// })
