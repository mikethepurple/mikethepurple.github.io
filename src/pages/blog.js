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
          headingFirst="THERE WILL BE BLOG  "
          size="32vh"
          speed="30"
        ></headings.Heading>
        <headings.Heading
          headingFirst="SOMEDAY  "
          size="22vh"
          speed="13"
        ></headings.Heading>
        <headings.Heading
          headingFirst="COME BACK SOMETIME  "
          size="16.5vh"
          speed="20"
        ></headings.Heading>
      </div>
    </div>
  )
}

export default App

// document.addEventListener("DOMContentLoaded", function(event) {
//   ReactDOM.render(<App />, document.getElementById("root"))
// })
