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

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="topmenu" style={{ fontWeight: "bold" }}>
      <a className="Me" href="/">
        <img src="../images/me.png" />
      </a>
      <div>
        <Burger className="burger" open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      {/* <Burger></Burger> */}
    </div>
  )
}

export default App
