import React from "react"
import { useState } from "react"
import Heading from "../components/headings.js"

function App() {
  //   const [open, setOpen] = useState(false)
  return (
    <div className="scrollRibbon">
      <Heading headingFirst=" SCROLL " size="3vh" speed="30"></Heading>
    </div>
  )
}

export default App
