import React from "react"
import * as headings from "../components/headings.js"
import Topmenu from "../components/topmenu"
import { Burger, Menu } from "../components"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Topmenu />
      <div></div>
    </div>
  )
}

export default App
