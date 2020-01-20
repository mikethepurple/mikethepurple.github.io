import React from "react"
import * as headings from "../components/headings.js"
import Topmenu from "../components/topmenu"
import { Burger, Menu } from "../components"
import { useState } from "react"
import ReactDOM from "react-dom"
import GoogleFontLoader from "react-google-font-loader"

function App() {
  return (
    <div id="root">
      <Topmenu />
      <div className="mainContent">
        <headings.Heading
          headingFirst="HELLO, MY NAME IS MISHA  "
          size="32vh"
          speed="30"
        ></headings.Heading>
        <headings.Heading
          headingFirst="I AM A PRODUCT DESIGNER FROM MOSCOW, RUSSIA  "
          size="22vh"
          speed="13"
        ></headings.Heading>
        <headings.Heading
          headingFirst="HERE’S SOME THAT projects I’VE WORKED ON  "
          size="16.5vh"
          speed="20"
        ></headings.Heading>
        <headings.Heading
          headingFirst="TAKE A LOOK AT MY RESUME AS WELL  "
          size="13.2vh"
          speed="7"
        ></headings.Heading>
        <headings.Heading
          headingFirst="DON’T FORGET TO SUBSCRIBE TO MY BLOG AND SOCIAL MEDIA  "
          size="11vh"
          speed="10"
        ></headings.Heading>
      </div>
    </div>
  )
}

export default App

// document.addEventListener("DOMContentLoaded", function(event) {
//   ReactDOM.render(<App />, document.getElementById("root"))
// })
