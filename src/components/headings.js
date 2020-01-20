import styles from "../styles/headings.module.css"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import React, { useState } from "react"
import ReactDOM from "react-dom"

class Hoverable extends React.Component {
  state = { hovered: false }
  render() {
    return (
      <div
        className="heading"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {this.props.children(this.state.hovered)}
      </div>
    )
  }
}

const Heading = ({
  headingFirst,
  headingMiddle,
  headingEnd,
  size,
  speed,
  children,
}) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  // const [speed, setSpeed] = useState(30)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <Hoverable>
      {hovered => (
        <div>
          {hovered ? (
            <PageVisibility onChange={handleVisibilityChange}>
              {pageIsVisible && (
                <Ticker
                  offset="-20"
                  speed={speed * 2}
                  className="hoverable"
                  mode="chain"
                >
                  {() => (
                    <div
                      className="headingContent"
                      // style={"display: inline-block"}
                      // className={styles.heading}
                    >
                      <span
                        className="headingContent"
                        style={{ fontSize: size }}
                      >
                        {headingFirst}
                      </span>
                      {/* <span
                        className={styles.headingContent}
                        style={{ fontSize: size, fontStyle: "italic" }}
                      >
                        {headingMiddle}
                      </span>
                      <span
                        className={styles.headingContent}
                        style={{ fontSize: size }}
                      >
                        {" "}
                        {headingEnd}
                      </span> */}
                    </div>
                  )}
                </Ticker>
              )}
            </PageVisibility>
          ) : (
            <PageVisibility onChange={handleVisibilityChange}>
              {pageIsVisible && (
                <Ticker
                  offset="-20"
                  speed={speed}
                  className="hoverable"
                  mode="chain"
                >
                  {() => (
                    <div
                      className="headingContent"
                      // style={"display: inline-block"}
                      // className={styles.heading}
                    >
                      <span
                        className="headingContent"
                        style={{ fontSize: size }}
                      >
                        {headingFirst}
                      </span>
                      {/* <span
                        className={styles.headingContent}
                        style={{ fontSize: size, fontStyle: "normal" }}
                      >
                        {headingMiddle}
                      </span>
                      <span
                        className={styles.headingContent}
                        style={{ fontSize: size }}
                      >
                        {headingEnd}
                      </span> */}
                    </div>
                  )}
                </Ticker>
              )}
            </PageVisibility>
          )}
        </div>
      )}
    </Hoverable>
  )
}
export { Heading }
