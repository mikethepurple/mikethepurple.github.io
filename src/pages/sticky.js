import React from "react"
import { StickyContainer, Sticky } from "react-sticky"
import Topmenu from "../components/topmenu"
import { useState } from "react"
import { StyledSide } from "../components/cv.styled"
import Heading from "../components/headings"

// ...

class App extends React.Component {
  render() {
    return (
      <div>
        <Topmenu />
        <div className="pageHeadings">
          <div onClick={() => window.open("/cv", "_self")} className="heading">
            <Heading
              headingFirst="CURRICULUM VITAE  "
              size="32vh"
              speed="30"
            />
          </div>
          <div onClick={() => window.open("/cv", "_self")} className="heading">
            <Heading
              headingFirst="SAVE AS PDF  "
              size="22vh"
              speed="13"
            />
          </div>
          <div
            onClick={() => window.open("/portfolio", "_self")}
            className="heading"
          >
            <Heading
              headingFirst="SHARE WITH SOMEONE ELSE  "
              size="16.5vh"
              speed="20"
            />
          </div>
        </div>
        <div className="cvContent">
          <StickyContainer className="cvWrapper">
            <div className="cvGrid">
              <div className='cvBlock'
              >
                <p>Gigway</p>
              </div>
              <div className='cvBlock'
              >
                <p>looi design studio</p>
              </div>
              <div className='cvBlock'
              >
                <p>BT.CX</p>
              </div>
              <div className='cvBlock'
              >
                <p>undo design studio</p>
              </div>
              <div className='cvBlock'
              >
                <p>6 years in advertising</p>
              </div>

              <div className='cvBlock'
              >
                <p>freelance consulting</p>
              </div>
            </div>
            <Sticky>
              {({
                  style,

                  // the following are also available but unused in this example
                  isSticky,
                  wasSticky,
                  distanceFromTop,
                  distanceFromBottom,
                  calculatedHeight,
                }) => (
                <header style={style}>
                  <div className="goodishSkills">
                    <div>
                      <p>FRONTEND DEVELOPMENT </p>
                      <p>ACCOUNT MANAGEMENT</p>
                      <p>UI ANIMATION</p>
                    </div>
                  </div>
                </header>
              )}
            </Sticky>
            {/* ... */}
          </StickyContainer>
        </div>
      </div>
    )
  }
}

export default App