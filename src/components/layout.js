import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styles from "../styles/headings.module.css"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div className="topmenu">
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          padding-left: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        me
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About
    </Link>
    <div className={styles.canvas}>{children}</div>
  </div>
)
