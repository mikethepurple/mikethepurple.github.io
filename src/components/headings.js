import React from "react"
import styles from "../styles/headings.module.css"
import Ticker from "react-ticker"

const Heading288 = ({ headingText }) => (
  <Ticker offset="-20" speed={30}>
    {() => (
      <div className={styles.heading}>
        <p className={styles.Heading288}>{headingText}</p>
      </div>
    )}
  </Ticker>
)

const Heading200 = ({ headingText }) => (
  <Ticker offset="-200" speed={10}>
    {() => (
      <div className={styles.heading}>
        <p className={styles.Heading200}>{headingText}</p>
      </div>
    )}
  </Ticker>
)

const Heading150 = ({ headingText }) => (
  <Ticker offset="-60" speed={5}>
    {() => (
      <div className={styles.heading}>
        <p className={styles.Heading150}>{headingText}</p>
      </div>
    )}
  </Ticker>
)

const Heading120 = ({ headingText }) => (
  <Ticker offset="0" speed={10}>
    {() => (
      <div className={styles.heading}>
        <p className={styles.Heading120}>{headingText}</p>
      </div>
    )}
  </Ticker>
)

const Heading100 = ({ headingText }) => (
  <Ticker offset="0" speed={7}>
    {() => (
      <div className={styles.heading}>
        <p className={styles.Heading100}>{headingText}</p>
      </div>
    )}
  </Ticker>
)

export { Heading288 }
export { Heading200 }
export { Heading150 }
export { Heading120 }
export { Heading100 }
// export { Moving }
